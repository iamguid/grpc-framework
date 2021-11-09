import * as path from "path";
import { FileDescriptor } from "../reflection/FileDescriptor";
import { ReflectionRegistry } from "../reflection/ReflectionRegistry";
import { replaceProtoSuffix } from "../utils";
import { HandlebarsGenerator, IHandlebarsGeneratorInput } from "./HandlebarsGenerator";

interface ServiceClient {
    className: string;
    methods: ServiceMethod[];
}

interface ServiceMethod {
    inputTypeName: string;
    outputTypeName: string;
    isServerStreaming: boolean;
    isClientStreaming: boolean;
}

interface ClientGeneratorCtx {
    clients: ServiceClient[];
}

export class ClientsFilesGenerator extends HandlebarsGenerator<ClientGeneratorCtx> {
    constructor(private protoFilesNames: string[], private registry: ReflectionRegistry) {
        super();
    }

    public generateClients() {
        for (const protoFileName of this.protoFilesNames) {
            const fileDescriptor = this.registry.getFileByName(protoFileName);

            const generatorCtx = this.buildGeneratorContext(fileDescriptor);

            if (generatorCtx.clients.length > 0) {
                const generatorInput: IHandlebarsGeneratorInput<ClientGeneratorCtx> = {
                    handlebarsTeamplateFilePath: path.join(__dirname, '../../templates/service_client.handlebars'),
                    protoFileName,
                    resultFileName: replaceProtoSuffix(fileDescriptor.name, 'client.ts'),
                    generatorCtx
                };

                this.generateFile(generatorInput);
            }
        }
    }

    private buildGeneratorContext(fileDescriptor: FileDescriptor): ClientGeneratorCtx {
        const clients: ServiceClient[] = [];

        for (const service of fileDescriptor.services) {
            clients.push({
                className: `${service.name}Client`,
                methods: [],
            });
        }

        return { clients };
    }
}

