import { buildNamespace } from '../utils';
import { BaseDescriptor, IBaseDescriptorProps } from './BaseDescriptor';
import { EnumDescriptor } from './EnumDescriptor';
import { FieldDescriptor } from './FieldDescriptor';
import { FileDescriptor } from './FileDescriptor';

export class MessageDescriptor extends BaseDescriptor {
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

    constructor(props: IBaseDescriptorProps & {
        messages: MessageDescriptor[],
        enums: EnumDescriptor[]
    }) {
        super(props);
        this.messages = props.messages;
        this.enums = props.enums;
    }

    public toObject(): any {
        return Object.assign(super.toObject(), {
            messages: this.messages.map(message => message.toObject()),
            enums: this.enums.map(enm => enm.toObject()),
        })
    }
}
