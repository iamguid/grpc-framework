import { ServiceDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { buildNamespace } from "../utils";
import { BaseDescriptor } from "./BaseDescriptor";
import { FileDescriptor } from "./FileDescriptor";
import { MethodDescriptor } from "./MethodDescriptor";
import { ReflectionRegistry } from "./ReflectionRegistry";

export class ServiceDescriptor extends BaseDescriptor<ServiceDescriptorProto> {
    /**
     * Contains all method descriptors that defined in service 
     */
    public readonly methods: MethodDescriptor[] = [];

    constructor(
        fileDescriptor: FileDescriptor,
        namespace: string,
        index: number | null,
        proto: ServiceDescriptorProto,
    ) {
        super(fileDescriptor, namespace, index, proto);

        this.methods = this.proto.getMethodList().map((method, i) => {
            return new MethodDescriptor(fileDescriptor, buildNamespace(namespace, this.name), i, method);
        });

        this.fileDescriptor.registry.addEntry(this);
    }

    public get name() {
        return this.proto.getName()!;
    }
}
