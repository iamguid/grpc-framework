import { MethodDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";

export class MethodDescriptor extends BaseDescriptor<MethodDescriptorProto> {
    public get name() {
        return this.proto.getName()!;
    }
}
