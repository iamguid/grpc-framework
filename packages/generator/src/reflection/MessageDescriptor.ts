import { DescriptorProto, FieldDescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';
import { buildNamespace } from '../utils';
import { BaseDescriptor } from './BaseDescriptor';
import { EnumDescriptor } from './EnumDescriptor';
import { FieldDescriptor } from './FieldDescriptor';
import { FileDescriptor } from './FileDescriptor';

export class MessageDescriptor extends BaseDescriptor<DescriptorProto> {
    /**
     * Contains all nested messages descriptors that defined in message 
     */
    public readonly messages: MessageDescriptor[] = [];

    /**
     * Contains all nested enums descriptors that defined in message 
     */
    public readonly enums: EnumDescriptor[] = [];

    /**
     * Contains all fields descriptors that defined in message 
     */
    public readonly fields: FieldDescriptor[] = [];

    constructor(
        fileDescriptor: FileDescriptor,
        namespace: string,
        index: number | null,
        proto: DescriptorProto,
    ) {
        super(fileDescriptor, namespace, index, proto);

        this.messages = this.proto.getNestedTypeList().map((message, index) => {
            return new MessageDescriptor(fileDescriptor, buildNamespace(namespace, this.name), index, message);
        });

        this.enums = this.proto.getEnumTypeList().map((enm, index) => {
            return new EnumDescriptor(fileDescriptor, buildNamespace(namespace, this.name), index, enm);
        });
        
        this.fields = this.proto.getFieldList().map((field, index) => {
            return new FieldDescriptor(this.fileDescriptor, buildNamespace(this.namespace, this.name), index, field);
        });

        this.fileDescriptor.registry.addEntry(this);
    }

    public get name() {
        return this.proto.getName()!;
    }
}
