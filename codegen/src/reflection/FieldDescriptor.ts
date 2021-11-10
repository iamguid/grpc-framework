import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";
import { trimChar } from "../utils";

export class FieldDescriptor extends BaseDescriptor<FieldDescriptorProto> {
    public get name() {
        return this.proto.getName()!;
    }

    public get type() {
        return trimChar(this.proto.getTypeName()!, '.');
    }
}
