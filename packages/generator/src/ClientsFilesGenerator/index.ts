import { buildNamespace, filePathToPseudoNamespace, getPathToRoot, lowerCaseFirst, replaceProtoSuffix } from "../utils";
import { ITSXTGeneratorInput, TSXTGenerator } from "../TSXTGenerator";
import { FileDescriptorWrapper } from "../FileDescriptorWrapper";
import { WellKnownTypesFilesMap } from "../WellKnownTypesFilesMap";
import { Dependency, Import } from "../BaseGeneratorTypes";

export type ServiceClient = {
    interfaceClassName: string;
    clientClassName: string;
    methods: ServiceMethod[];
}

export type ServiceMethod = {
    methodName: string;
    inputType: string;
    outputType: string;
    isServerStreaming: boolean;
    isClientStreaming: boolean;
}

export type ClientsFilesGeneratorContext = {
    wrapper: FileDescriptorWrapper;
    imports: Import[];
    clients: ServiceClient[];
}

export class ClientsFilesGenerator extends TSXTGenerator<ClientsFilesGeneratorContext> {
    constructor(private files: FileDescriptorWrapper[]) {
        super();
    }

    public generate() {
        for (const wrapper of this.files) {
            const generatorCtx = this.buildGeneratorContext(wrapper);

            if (generatorCtx.clients.length > 0) {
                const generatorInput: ITSXTGeneratorInput<ClientsFilesGeneratorContext> = {
                    template: require("../../templates/dist/service-client.template").default,
                    protoFileName: wrapper.fileName,
                    resultFileName: replaceProtoSuffix(wrapper.fileName, 'clients.ts'),
                    generatorCtx
                };

                this.generateFile(generatorInput);
            }
        }
    }

    private buildGeneratorContext(wrapper: FileDescriptorWrapper): ClientsFilesGeneratorContext {
        const clients: ServiceClient[] = [];
        const dependencies = this.resolveDependencies(wrapper);
        console.log(dependencies);

        for (const service of wrapper.file.services) {
            const methods: ServiceMethod[] = service.methods.map(method => {
                return {
                    methodName: lowerCaseFirst(method.name),
                    inputType: dependencies.deps.get(method.inputMessageType)!.typePath,
                    outputType: dependencies.deps.get(method.outputMessageType)!.typePath,
                    isClientStreaming: method.isClientStreaming,
                    isServerStreaming: method.isServerStreaming,
                }
            })

            clients.push({
                clientClassName: `${service.name}Client`,
                interfaceClassName: `I${service.name}Client`,
                methods,
            });
        }

        return {
            wrapper,
            clients,
            imports: dependencies.imports,
        }
    }

    private resolveDependencies(wrapper: FileDescriptorWrapper) {
        const imports: Map<string, Import> = new Map();
        const dependencies: Map<string, Dependency> = new Map();
        const pathToRoot = getPathToRoot(wrapper.fileName);

        for (const type of wrapper.types.values()) {
            const filePathWithoutExtension = replaceProtoSuffix(type.file.fileName, 'dto');
            const importName = filePathToPseudoNamespace(filePathWithoutExtension);

            // Is Well Known Type
            if (type.descriptor.name in WellKnownTypesFilesMap) {
                const importPath = WellKnownTypesFilesMap[type.descriptor.name];

                if (!imports.has(filePathWithoutExtension)) {
                    imports.set(filePathWithoutExtension, { name: importName, path: importPath });
                }

                const imprt = imports.get(filePathWithoutExtension)!;

                dependencies.set(type.descriptor.fullname, {
                    import: imprt,
                    typePath: buildNamespace(imprt.name, type.descriptor.name)
                });

            // Is message or enum type
            } else {
                const importPath = pathToRoot + filePathWithoutExtension;

                if (!imports.has(filePathWithoutExtension)) {
                    imports.set(filePathWithoutExtension, { name: importName, path: importPath });
                }

                const imprt = imports.get(filePathWithoutExtension)!;
                dependencies.set(type.descriptor.fullname, { 
                    import: imprt, 
                    typePath: buildNamespace(imprt.name, type.descriptor.name)
                });
            }
        }

        return {
            imports: Array.from(imports.values()),
            deps: dependencies
        };
    }
}
