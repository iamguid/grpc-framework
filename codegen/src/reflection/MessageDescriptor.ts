import { DescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';
import { BaseDescriptor } from './BaseDescriptor';

export class MessageDescriptor extends BaseDescriptor<DescriptorProto> {
    public get name() {
        return this.proto.getName()!;
    }
}
