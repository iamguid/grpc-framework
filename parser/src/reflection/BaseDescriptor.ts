import { buildNamespace } from '../utils';
import { FileDescriptor } from './FileDescriptor';
import { IDescriptor } from './IDescriptor';

export interface IBaseDescriptorProps {
    index: number | null,
    name: string,
    namespace: string,
    fileDescriptor: FileDescriptor,
}

export abstract class BaseDescriptor implements IDescriptor {
    /**
     * The index of this descriptor within its parent descriptor.
     * 
     * This returns the index of this descriptor within its parent, for
     * this descriptor's type. (There can be duplicate values for different
     * types, e.g. one enum type with index 0 and one message type with index 0.)
     */
    public readonly index: number | null;

    /**
     * Returns the name of the entity (field, message etc) being described.
     */
    public readonly name: string;

    /**
     * The fully qualified namespace of the descriptor's target.
     * 
     * Includes {package name}.{path to message}
     * Does not include name of descriptor
     */
    public readonly namespace: string;

    /**
     * The file this descriptor was declared in.
     */
    public readonly fileDescriptor: FileDescriptor;

    constructor(props: IBaseDescriptorProps) {
        this.index = props.index;
        this.name = props.name;
        this.namespace = props.namespace;
        this.fileDescriptor = props.fileDescriptor;
    }

    /**
     * Returns full path of entity being described.
     */
    public get fullpath() {
        return buildNamespace(this.namespace, this.name);
    }

    public toObject() {
        return {
            index: this.index,
            name: this.name,
            namespace: this.namespace
        }
    }
}
