import { EnumValueDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";

export class EnumValueDescriptor extends BaseDescriptor<EnumValueDescriptorProto> {
    public get name() {
        return this.proto.getName()!;
    }
}
