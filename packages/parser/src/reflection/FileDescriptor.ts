import { buildNamespace } from "../utils";
import { EnumDescriptor } from "./EnumDescriptor";
import { IDescriptor } from "./IDescriptor";
import { MessageDescriptor } from "./MessageDescriptor";
import { Options } from "./Options";
import { ServiceDescriptor } from "./ServiceDescriptor";

export interface FileImport {
    type: 'weak' | 'public';
    path: string;
}

export class FileDescriptor implements IDescriptor {
    /**
     * Package name declared in .proto file.
     */
    public package: string;

    /**
     * Returns the name of the entity (field, message etc) being described.
     */
    public name: string;

    /**
     * The fully qualified namespace of the descriptor's target.
     * 
     * Includes {package name}.{path to message}
     * Does not include name of message
     */
    public namespace: string;

    /**
     * Contains all options that defined in .proto file.
     */
    public readonly options: Options[] = [];

    /**
     * Contains all imports descriptors that defined in .proto file.
     */
    public readonly imports: FileImport[] = [];

    /**
     * Contains all services descriptors that defined in .proto file.
     */
    public readonly services: ServiceDescriptor[] = [];

    /**
     * Contains all messages descriptors that defined in .proto file.
     */
    public readonly messages: MessageDescriptor[] = [];

    /**
     * Contains all enums descriptors that defined in .proto file.
     */
    public readonly enums: EnumDescriptor[] = [];

    /**
     * Returns full path of entry being described.
     */
    public get fullpath() {
        return buildNamespace(this.namespace, this.name);
    }

    public toObject() {
        return {
            package: this.package,
            name: this.name,
            namespace: this.namespace,
            options: this.options,
            imports: this.imports,
            services: this.services.map(service => service.toObject()),
            messages: this.messages.map(message => message.toObject()),
            enums: this.enums.map(enm => enm.toObject())
        }
    }
}
