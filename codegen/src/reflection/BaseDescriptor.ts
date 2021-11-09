import { Message } from 'google-protobuf';
import { buildNamespace } from '../utils';
import { FileDescriptor } from './FileDescriptor';
import { IDescriptor } from './IDescriptor';

export abstract class BaseDescriptor<TProtoDescriptor extends Message> implements IDescriptor<TProtoDescriptor> {
    private _index: number | null;
    private _namespace: string;
    private _fileDescriptor: FileDescriptor;
    private _proto: TProtoDescriptor;

    constructor(fileDescriptor: FileDescriptor, namespace: string, index: number | null, proto: TProtoDescriptor) {
        this._fileDescriptor = fileDescriptor;
        this._index = index;
        this._namespace = namespace;
        this._proto = proto;
    }

    /**
     * The index of this descriptor within its parent descriptor.
     * 
     * This returns the index of this descriptor within its parent, for
     * this descriptor's type. (There can be duplicate values for different
     * types, e.g. one enum type with index 0 and one message type with index 0.)
     */
    public get index() {
        return this._index;
    }

    /**
     * The file this descriptor was declared in.
     */
    public get fileDescriptor() {
        return this._fileDescriptor;
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

    /**
     * The fully qualified namespace of the descriptor's target.
     * 
     * Includes {package name}.{path to message}
     * Does not include name of message
     */
    public get namespace() {
        return this._namespace;
    }

    /**
     * Returns the proto descriptor for this entity.
     */
    public get proto() {
        return this._proto;
    }
}
