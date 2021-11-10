import { Message } from 'google-protobuf';
import { buildNamespace } from '../utils';
import { FileDescriptor } from './FileDescriptor';
import { IDescriptor } from './IDescriptor';
import { ReflectionRegistry } from './ReflectionRegistry';

export abstract class BaseDescriptor<TProtoDescriptor extends Message> implements IDescriptor<TProtoDescriptor> {

    /**
     * The index of this descriptor within its parent descriptor.
     * 
     * This returns the index of this descriptor within its parent, for
     * this descriptor's type. (There can be duplicate values for different
     * types, e.g. one enum type with index 0 and one message type with index 0.)
     */
    public readonly index: number | null;

    /**
     * The fully qualified namespace of the descriptor's target.
     * 
     * Includes {package name}.{path to message}
     * Does not include name of message
     */
    public readonly namespace: string;

    /**
     * The file this descriptor was declared in.
     */
    public readonly fileDescriptor: FileDescriptor;

    /**
     * Returns the proto descriptor for this entity.
     */
    public readonly proto: TProtoDescriptor;

    constructor(
        fileDescriptor: FileDescriptor,
        namespace: string,
        index: number | null,
        proto: TProtoDescriptor,
    ) {
        this.fileDescriptor = fileDescriptor;
        this.index = index;
        this.namespace = namespace;
        this.proto = proto;
    }

    /**
     * Returns the name of the entity (field, message etc) being described.
     */
    public abstract name: string;

    /**
     * Returns full path of entry being described.
     */
    public get fullpath() {
        return buildNamespace(this.namespace, this.name);
    }
}
