import { Message } from "google-protobuf";
import { FieldDescriptorProto, FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { buildNamespace } from "../utils";
import { EnumDescriptor } from "./EnumDescriptor";
import { IDescriptor } from "./IDescriptor";
import { MessageDescriptor } from "./MessageDescriptor";
import { ReflectionRegistry } from "./ReflectionRegistry";
import { ServiceDescriptor } from "./ServiceDescriptor";

export class FileDescriptor implements IDescriptor<FileDescriptorProto> {
    /**
     * The fully qualified namespace of the descriptor's target.
     * 
     * Includes {package name}.{path to message}
     * Does not include name of message
     */
    public readonly namespace: string;

    /**
     * Contains the proto descriptor for this entity.
     */
    public readonly proto: FileDescriptorProto;

    /**
     * Contains reflection registry.
     */
    public readonly registry: ReflectionRegistry;

    /**
     * Contains all services descriptors that defined in .proto file.
     */
    public readonly services: ServiceDescriptor[];

    /**
     * Contains all messages descriptors that defined in .proto file.
     */
    public readonly messages: MessageDescriptor[];

    /**
     * Contains all enums descriptors that defined in .proto file.
     */
    public readonly enums: EnumDescriptor[];

    constructor(proto: FileDescriptorProto, dependencies: FileDescriptor[]) {
        this.namespace = proto.getPackage()!;
        this.proto = proto;
        this.registry = new ReflectionRegistry(dependencies);

        this.services = this.proto.getServiceList().map((service, index) => {
            return new ServiceDescriptor(this, this.namespace, index, service);
        })

        this.messages = this.proto.getMessageTypeList().map((message, index) => {
            return new MessageDescriptor(this, this.namespace, index, message);
        });

        this.enums = this.proto.getEnumTypeList().map((enm, index) => {
            return new EnumDescriptor(this, this.namespace, index, enm);
        });

        this.registry.addEntry(this);
    }

    /**
     * Returns the name of the entity (field, message etc) being described.
     */
    public get name() {
        return this.proto.getName()!;
    }

    /**
     * Returns full path of entry being described.
     */
    public get fullpath() {
        return buildNamespace(this.namespace, this.name);
    }
}
