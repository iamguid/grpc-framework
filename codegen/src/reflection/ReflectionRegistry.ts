import { DescriptorProto, EnumDescriptorProto, FieldDescriptorProto, FileDescriptorProto, ServiceDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { buildNamespace } from "../utils";
import { EnumDescriptor } from "./EnumDescriptor";
import { FileDescriptor } from "./FileDescriptor";
import { MessageDescriptor } from "./MessageDescriptor";
import { ServiceDescriptor } from "./ServiceDescriptor";

/**
 * Defines reflection registry
 * 
 * Registry contains dependencies per all .proto files
 */
export class ReflectionRegistry {
    /**
     * Contains all imported descriptors of .proto files.
     */
    private readonly files: Map<string, FileDescriptor> = new Map();

    /**
     * Contains files fullpats by filename.
     */
    private readonly filesByName: Map<string, string> = new Map();

    /**
     * Contains all imported services descriptors per all .proto files.
     */
    private readonly services: Map<string, ServiceDescriptor> = new Map();

    /**
     * Contains all imported messages descriptors per all .proto files.
     */
    private readonly messages: Map<string, MessageDescriptor> = new Map();

    /**
     * Contains all imported enums descriptors per all .proto files.
     */
    private readonly enums: Map<string, EnumDescriptor> = new Map();

    /**
     * Returns file descriptor specified by fullpath
     */
    public getFile(fullpath: string) {
        const descriptor = this.files.get(fullpath);

        if (!descriptor) {
            throw new Error(`File with full path ${fullpath} is not defined`);
        }

        return descriptor;
    }

    /**
     * Returns file descriptor specified by file name
     */
    public getFileByName(filename: string) {
        const fileFullPath = this.filesByName.get(filename) || '';
        return this.getFile(fileFullPath);
    }

    /**
     * Returns service descriptor specified by fullpath
     */
    public getService(fullpath: string) {
        const descriptor = this.services.get(fullpath);

        if (!descriptor) {
            throw new Error(`Service with full path ${fullpath} is not defined`);
        }

        return descriptor;
    }

    /**
     * Returns message descriptor specified by fullpath
     */
    public getMessage(fullpath: string) {
        const descriptor = this.messages.get(fullpath);

        if (!descriptor) {
            throw new Error(`Message with full path ${fullpath} is not defined`);
        }

        return descriptor;
    }

    /**
     * Returns enum descriptor specified by fullpath
     */
    public getEnum(fullpath: string) {
        const descriptor = this.enums.get(fullpath);

        if (!descriptor) {
            throw new Error(`Enum with full path ${fullpath} is not defined`);
        }

        return descriptor;
    }

    /**
     * Import file with all nested descriptors reqursivelly
     */
    public importFile(fileDescriptorProto: FileDescriptorProto) {
        const fileDescriptor = this.importFileDescriptor(fileDescriptorProto);

        const exportNested = (messageDescriptorProto: DescriptorProto, namespace: string, index = 0) => {
            this.importMessageDescriptor(fileDescriptor, messageDescriptorProto, namespace, index);

            messageDescriptorProto.getNestedTypeList().forEach((messageDescriptorProto, index) => {
                exportNested(messageDescriptorProto, buildNamespace(namespace, messageDescriptorProto.getName()), index);
            });

            messageDescriptorProto.getEnumTypeList().forEach((enumDescriptorProto, index) => {
                this.importEnumDescriptor(fileDescriptor, enumDescriptorProto, buildNamespace(namespace, messageDescriptorProto.getName()), index)
            });
        };

        fileDescriptorProto.getMessageTypeList().forEach((messageDescriptorProto, index) => {
            exportNested(messageDescriptorProto, fileDescriptorProto.getPackage()!, index);
        });

        fileDescriptorProto.getEnumTypeList().forEach((enumDescriptorProto, index) => {
            this.importEnumDescriptor(fileDescriptor, enumDescriptorProto, fileDescriptorProto.getPackage()!, index)
        });

        fileDescriptorProto.getServiceList().forEach((serviceDescriptorProto, index) => {
            this.importServiceDescriptor(fileDescriptor, serviceDescriptorProto, fileDescriptorProto.getPackage()!, index)
        });
    }

    private importFileDescriptor(proto: FileDescriptorProto) {
        const descriptor = new FileDescriptor(proto, this);
        this.files.set(descriptor.fullpath, descriptor);
        this.filesByName.set(proto.getName()!, descriptor.fullpath)
        return descriptor;
    }

    private importMessageDescriptor(fileDescriptor: FileDescriptor, proto: DescriptorProto, namespace: string, index: number) {
        const descriptor = new MessageDescriptor(
            fileDescriptor,
            namespace,
            index,
            proto
        );

        this.messages.set(descriptor.fullpath, descriptor);
        return descriptor;
    }

    private importEnumDescriptor(fileDescriptor: FileDescriptor, proto: EnumDescriptorProto, namespace: string, index: number) {
        const descriptor = new EnumDescriptor(
            fileDescriptor,
            namespace,
            index,
            proto
        );

        this.enums.set(descriptor.fullpath, descriptor);
        return descriptor;
    }

    private importServiceDescriptor(fileDescriptor: FileDescriptor, proto: ServiceDescriptorProto, namespace: string, index: number) {
        const descriptor = new ServiceDescriptor(
            fileDescriptor,
            namespace,
            index,
            proto
        );

        this.services.set(descriptor.fullpath, descriptor);
        return descriptor;
    }
}
