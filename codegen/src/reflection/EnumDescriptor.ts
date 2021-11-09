import { EnumDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";

export class EnumDescriptor extends BaseDescriptor<EnumDescriptorProto> {
    public get name() {
        return this.proto.getName()!;
    }
}
