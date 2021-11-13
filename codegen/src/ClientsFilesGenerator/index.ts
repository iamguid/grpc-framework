import { FileDescriptor } from "../reflection/FileDescriptor";
import { lowerCaseFirst, replaceProtoSuffix } from "../utils";
import { clientsFileDepsResolver, Import } from "./clientsFileDepsResolver";
import { ITSXTGeneratorInput, TSXTGenerator } from "../TSXTGenerator";

export namespace ClientsFilesGenerator {
    export interface ServiceClient {
        interfaceClassName: string;
        clientClassName: string;
        methods: ServiceMethod[];
    }

    export interface ServiceMethod {
        methodName: string;
        inputType: string;
        outputType: string;
        isServerStreaming: boolean;
        isClientStreaming: boolean;
    }

    export interface Context {
        fileDescriptor: FileDescriptor;
        imports: Import[];
        clients: ServiceClient[];
    }

    export class ClientsFilesGenerator extends TSXTGenerator<Context> {
        constructor(private filesToGenerateList: FileDescriptor[]) {
            super();
        }

        public generateClients() {
            for (const fileDescriptor of this.filesToGenerateList) {
                const generatorCtx = this.buildGeneratorContext(fileDescriptor);

                if (generatorCtx.clients.length > 0) {
                    const generatorInput: ITSXTGeneratorInput<Context> = {
                        template: require("../../templates/dist/service-client.template").default,
                        protoFileName: fileDescriptor.name,
                        resultFileName: replaceProtoSuffix(fileDescriptor.name, 'client.ts'),
                        generatorCtx
                    };

                    this.generateFile(generatorInput);
                }
            }
        }

        private buildGeneratorContext(fileDescriptor: FileDescriptor): Context {
            const clients: ServiceClient[] = [];
            const dependencies = clientsFileDepsResolver(fileDescriptor);

            for (const service of fileDescriptor.services) {
                const methods: ServiceMethod[] = service.methods.map(method => {
                    return {
                        methodName: lowerCaseFirst(method.name),
                        inputType: dependencies.deps.get(method.inputType)!.fullTypePath,
                        outputType: dependencies.deps.get(method.outputType)!.fullTypePath,
                        isClientStreaming: method.proto.getClientStreaming()!,
                        isServerStreaming: method.proto.getServerStreaming()!,
                    }
                })

                clients.push({
                    clientClassName: `${service.name}Client`,
                    interfaceClassName: `I${service.name}Client`,
                    methods,
                });
            }

            return {
                fileDescriptor,
                clients,
                imports: dependencies.imports,
            }
        }
    }
}
