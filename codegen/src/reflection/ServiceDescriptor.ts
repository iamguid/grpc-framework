import { ServiceDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";
import { FileDescriptor } from "./FileDescriptor";
import { MethodDescriptor } from "./MethodDescriptor";

export class ServiceDescriptor extends BaseDescriptor<ServiceDescriptorProto> {
    public readonly methods: MethodDescriptor[] = [];

    constructor(fileDescriptor: FileDescriptor, namespace: string, index: number | null, proto: ServiceDescriptorProto) {
        super(fileDescriptor, namespace, index, proto);

        proto.getMethodList().forEach((method, i) => {
            this.methods.push(new MethodDescriptor(fileDescriptor, namespace, i, method))
        });
    }

    public get name() {
        return this.proto.getName()!;
    }
}
