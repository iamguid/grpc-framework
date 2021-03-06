import { EnumDescriptor, FieldDescriptor, MessageDescriptor } from "@grpc-web-framework/parser";
import { buildNamespace, filePathToPseudoNamespace, getPathToRoot, lowerCaseFirst, replaceProtoSuffix } from "../utils";
import { ITSXTGeneratorInput, TSXTGenerator } from "../TSXTGenerator";
import { FileDescriptorWrapper } from "../FileDescriptorWrapper";
import { WellKnownTypesFilesMap } from "../WellKnownTypesFilesMap";
import { Dependencies, Dependency, Import } from "../BaseGeneratorTypes";

const ProtobufTypeToTsType: {[key: string]: string} = {
    "double": 'number',
    "float": 'number',
    "int32": 'number',
    "int64": 'BigInt',
    "uint32": 'number',
    "uint64": 'BigInt',
    "sint32": 'number',
    "sint64": 'BigInt',
    "fixed32": 'number',
    "fixed64": 'BigInt',
    "sfixed32": 'number',
    "sfixed64": 'BigInt',
    "enum": 'number',
    "bool": 'boolean',
    "string": 'string',
    "bytes": 'Uint8Array',
};

export type MapType = {
    keyType: string;
    valueType: string;
    valueTypeIsMessage: boolean;
}

export type EnumField = {
    fieldName: string;
    fieldValue: number;
}

export type Enum = {
    name: string,
    fields: EnumField[],
}

export type MessageField = {
    fieldName: string;
    fieldRawType: string;
    fieldType: string;
    fieldNumber: number;
    isMessageType: boolean;
    isRepeated: boolean;
    isMap: boolean;
    isOneof: boolean;
    oneofName?: string;
    mapType?: MapType;
}

export type Message = {
    ifaceName: string;
    modelName: string;
    messageIndex: number;
    pivot: number;
    fields: MessageField[];
    mesages: Message[];
    enums: Enum[];
}

export type ModelsFilesGeneratorContext = {
    wrapper: FileDescriptorWrapper;
    imports: Import[];
    messges: Message[];
    enums: Enum[]
}

export class ModelsFilesGenerator extends TSXTGenerator<ModelsFilesGeneratorContext> {
    constructor(private files: FileDescriptorWrapper[]) {
        super();
    }

    public generate() {
        for (const wrapper of this.files) {
            const generatorCtx = this.buildGeneratorContext(wrapper);

            if (generatorCtx.messges.length > 0 || generatorCtx.enums.length > 0) {
                const generatorInput: ITSXTGeneratorInput<ModelsFilesGeneratorContext> = {
                    template: require("../../templates/dist/models.template").default,
                    protoFileName: wrapper.fileName,
                    resultFileName: replaceProtoSuffix(wrapper.fileName, 'models.ts'),
                    generatorCtx
                };

                this.generateFile(generatorInput);
            }
        }
    }

    private buildGeneratorContext(wrapper: FileDescriptorWrapper): ModelsFilesGeneratorContext {
        const dependencies = this.resolveDependencies(wrapper);
        console.log(dependencies);

        return {
            wrapper,
            imports: dependencies.imports,
            enums: this.buildEnums(wrapper.file.enums),
            messges: this.buildMessages(wrapper.file.messages, dependencies),
        }
    }

    private buildEnums(enums: EnumDescriptor[]): Enum[] {
        return enums.map(enm => {
            const enumFields: EnumField[] = enm.fields.map(field => {
                return {
                    fieldName: field.fieldName,
                    fieldValue: field.fieldValue,
                }
            })

            return {
                name: enm.name,
                fields: enumFields,
            }
        });
    }

    private buildMessages(messages: MessageDescriptor[], dependencies: Dependencies): Message[] {
        return messages.map(message => {
            const fileds: MessageField[] = message.fields.map(field => {
                let mapType: MapType | undefined = undefined;

                if (field.map) {
                    mapType = {
                        keyType: this.resolveType(dependencies, field.map.keyType),
                        valueType: this.resolveType(dependencies, field.map.valueType),
                        valueTypeIsMessage: !(field.map.valueType in ProtobufTypeToTsType)
                    }
                }

                return {
                    fieldName: lowerCaseFirst(field.name),
                    fieldNumber: field.fieldNumber,
                    fieldRawType: field.type,
                    fieldType: Boolean(field.type) ? this.resolveType(dependencies, field.type) : "",
                    isMessageType: !(field.type in ProtobufTypeToTsType),
                    isMap: Boolean(field.map),
                    isOneof: Boolean(field.oneofName),
                    isRepeated: field.repeated,
                    mapType,
                    oneofName: field.oneofName,
                }
            })

            const nestedEnums: Enum[] = this.buildEnums(message.enums);
            const nestedMessages: Message[] = this.buildMessages(message.messages, dependencies);

            return {
                messageIndex: message.index!,
                ifaceName: `I${message.name}`,
                modelName: message.name,
                pivot: this.getPivot(message),
                enums: nestedEnums,
                mesages: nestedMessages,
                fields: fileds,
            }
        })
    }

    private resolveType(dependencies: Dependencies, type: string): string {
        if (type in ProtobufTypeToTsType) {
            return ProtobufTypeToTsType[type];
        }

        if (dependencies.deps.has(type)) {
            return dependencies.deps.get(type)!.typePath
        }

        throw new Error(`Cannot resolve type ${type}`);
    }

    private resolveDependencies(wrapper: FileDescriptorWrapper) {
        const imports: Map<string, Import> = new Map();
        const dependencies: Map<string, Dependency> = new Map();
        const pathToRoot = getPathToRoot(wrapper.fileName);

        for (const type of wrapper.types.values()) {
            const filePathWithoutExtension = replaceProtoSuffix(type.file.fileName, 'models');
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

    // Returns the max index in the underlying data storage array beyond which the
    // extension object is used.
    private getPivot(messageDescriptor: MessageDescriptor): number {
        const kDefaultPivot = 500;

        // Find the max field number
        let maxFieldNumber = 0;
        for (let i = 0; i < messageDescriptor.fields.length; i++) {
            if (messageDescriptor.fields[i].fieldNumber > maxFieldNumber) {
                maxFieldNumber = messageDescriptor.fields[i].fieldNumber;
            }
        }

        let pivot = -1;
        if (maxFieldNumber >= kDefaultPivot) {
            pivot = ((maxFieldNumber + 1) < kDefaultPivot) ? (maxFieldNumber + 1) : kDefaultPivot;
        }

        return pivot;
    }
}
