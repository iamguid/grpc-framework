import { EnumDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";
import { FileDescriptor } from "./FileDescriptor";

export class EnumDescriptor extends BaseDescriptor<EnumDescriptorProto> {
    constructor(
        fileDescriptor: FileDescriptor,
        namespace: string,
        index: number | null,
        proto: EnumDescriptorProto,
    ) {
        super(fileDescriptor, namespace, index, proto);
        fileDescriptor.registry.addEntry(this);
    }

    public get name() {
        return this.proto.getName()!;
    }
}
