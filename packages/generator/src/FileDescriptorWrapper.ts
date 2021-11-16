import { BaseDescriptor, FieldDescriptor, FileDescriptor, MethodDescriptor } from "@grpc-web-framework/parser";

export interface IResolveTypeResult {
    file: FileDescriptorWrapper,
    descriptor: BaseDescriptor,
}

export const INBUILD_PROTO_TYPES_TO_JS_TYPES: Record<string, string> = {
    "double": 'number', // bigint?
    "float": 'number',
    "int32": 'number',
    "int64": 'number',
    "uint32": 'number',
    "uint64": 'number',
    "sint32": 'number',
    "sint64": 'number',
    "fixed32": 'number',
    "fixed64": 'number',
    "sfixed32": 'number',
    "sfixed64": 'number',
    "enum": 'number',
    "bool": 'boolean',
    "string": 'string',
    "bytes": 'Uint8Array',
  };

export class FileDescriptorWrapper {
    public readonly fileName: string;
    public readonly file: FileDescriptor;
    public readonly dependencies: Map<string, FileDescriptorWrapper>; // Map<fileName, fileDescriptorWrapper>
    public readonly types: Map<string, IResolveTypeResult>; // Map<typeFullPath, resolveTypeResult>

    constructor(fileName: string, file: FileDescriptor, dependencies: Map<string, FileDescriptorWrapper>) {
        this.fileName = fileName;
        this.file = file;
        this.dependencies = dependencies;
        this.types = this.resolveTypes();
    }

    private resolveType(type: string): IResolveTypeResult | null {
        if (INBUILD_PROTO_TYPES_TO_JS_TYPES[type]) {
            throw new Error(`Cannot resolve type because type "${type}" is builtin`);
        }

        if (this.file.registry.descriptors.has(type)) {
            return {
                file: this,
                descriptor: this.file.registry.get(type) as BaseDescriptor
            }
        } else {
            for (const dependency of this.dependencies.values()) {
                const resolvedType = dependency.resolveType(type);
                if (resolvedType) {
                    return resolvedType;
                }
            }
        }

        return null;
    }

    private resolveTypes() {
        const resolvedTypesMap: Map<string, IResolveTypeResult> = new Map();
        const types = this.extractTypes();

        for (const type of types) {
            const resolvedType = this.resolveType(type);

            if (!resolvedType) {
                throw new Error(`Cannot resolve type "${type}"`);
            }

            resolvedTypesMap.set(resolvedType.descriptor.fullname, resolvedType);
        }

        return resolvedTypesMap;
    }

    private extractTypes() {
        const result: Set<string> = new Set();

        for (const descriptor of this.file.registry.descriptors.values()) {
            if (descriptor instanceof FieldDescriptor) {
                if (descriptor.map) {
                    if (!INBUILD_PROTO_TYPES_TO_JS_TYPES[descriptor.map.keyType]) {
                        result.add(descriptor.map.keyType);
                    }

                    if (!INBUILD_PROTO_TYPES_TO_JS_TYPES[descriptor.map.valueType]) {
                        result.add(descriptor.map.valueType);
                    }
                } else {
                    if (!INBUILD_PROTO_TYPES_TO_JS_TYPES[descriptor.type]) {
                        result.add(descriptor.type);
                    }
                }
            }

            if (descriptor instanceof MethodDescriptor) {
                if (!INBUILD_PROTO_TYPES_TO_JS_TYPES[descriptor.inputMessageType]) {
                    result.add(descriptor.inputMessageType);
                }

                if (!INBUILD_PROTO_TYPES_TO_JS_TYPES[descriptor.outputMessageType]) {
                    result.add(descriptor.outputMessageType);
                }
            }
        }

        return Array.from(result);
    }
}
