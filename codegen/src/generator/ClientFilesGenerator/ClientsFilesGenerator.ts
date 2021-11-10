import * as path from "path";
import { FileDescriptor } from "../../reflection/FileDescriptor";
import { lowerCaseFirst, replaceProtoSuffix } from "../../utils";
import { clientsFileDepsResolver, Import } from "./clientsFileDepsResolver";
import { HandlebarsGenerator, IHandlebarsGeneratorInput } from "../HandlebarsGenerator";

interface ServiceClient {
    interfaceClassName: string;
    clientClassName: string;
    methods: ServiceMethod[];
}

interface ServiceMethod {
    methodName: string;
    inputType: string;
    outputType: string;
    isServerStreaming: boolean;
    isClientStreaming: boolean;
}

interface ClientGeneratorCtx {
    imports: Import[];
    clients: ServiceClient[];
}

export class ClientsFilesGenerator extends HandlebarsGenerator<ClientGeneratorCtx> {
    constructor(private filesToGenerateList: FileDescriptor[]) {
        super();
    }

    public generateClients() {
        for (const fileDescriptor of this.filesToGenerateList) {
            const generatorCtx = this.buildGeneratorContext(fileDescriptor);

            if (generatorCtx.clients.length > 0) {
                const generatorInput: IHandlebarsGeneratorInput<ClientGeneratorCtx> = {
                    handlebarsTeamplateFilePath: path.join(__dirname, '../../../templates/service_client.handlebars'),
                    protoFileName: fileDescriptor.name,
                    resultFileName: replaceProtoSuffix(fileDescriptor.name, 'client.ts'),
                    generatorCtx
                };

                this.generateFile(generatorInput);
            }
        }
    }

    private buildGeneratorContext(fileDescriptor: FileDescriptor): ClientGeneratorCtx {
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
            clients,
            imports: dependencies.imports,
        }
    }
}
