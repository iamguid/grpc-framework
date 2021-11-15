import { OneofDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { BaseDescriptor } from "./BaseDescriptor";

export class OneofDescriptor extends BaseDescriptor<OneofDescriptorProto> { 
    public get name() {
        return this.proto.getName()!;
    }
}
