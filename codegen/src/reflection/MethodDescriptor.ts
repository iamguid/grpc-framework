import { MethodDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { trimChar } from "../utils";
import { BaseDescriptor } from "./BaseDescriptor";

export class MethodDescriptor extends BaseDescriptor<MethodDescriptorProto> {
    public get name() {
        return this.proto.getName()!;
    }

    public get inputType() {
        return trimChar(this.proto.getInputType()!, '.');
    }

    public get outputType() {
        return trimChar(this.proto.getOutputType()!, '.');
    }
}
