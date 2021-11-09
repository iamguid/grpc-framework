import { Message } from "google-protobuf";
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
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

    private  readonly registry: ReflectionRegistry;

    constructor(proto: FileDescriptorProto, registry: ReflectionRegistry) {
        this.namespace = proto.getPackage()!;
        this.proto = proto;
        this.registry = registry;
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

    /**
     * Returns all services descriptors that defined in .proto file 
     */
    public get services() {
        const services: ServiceDescriptor[] = [];

        this.proto.getServiceList().forEach((service, index) => {
            const serviceNamespace = buildNamespace(this.namespace, service.getName());
            services.push(this.registry.getService(serviceNamespace));
        });

        return services;
    }

    /**
     * Returns all messages descriptors that defined in .proto file 
     */
    public get messages() {
        const messages: MessageDescriptor[] = [];

        this.proto.getMessageTypeList().forEach(service => {
            const serviceNamespace = buildNamespace(this.namespace, service.getName());
            messages.push(this.registry.getMessage(serviceNamespace));
        });

        return messages;
    }

    /**
     * Returns all enums descriptors that defined in .proto file 
     */
    public get enums() {
        const enums: EnumDescriptor[] = [];

        this.proto.getEnumTypeList().forEach(enm => {
            const serviceNamespace = buildNamespace(this.namespace, enm.getName());
            enums.push(this.registry.getEnum(serviceNamespace));
        });

        return enums;
    }
}
