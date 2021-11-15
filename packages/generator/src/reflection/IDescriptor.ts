import { Message } from "google-protobuf";
import { FileDescriptor } from "./FileDescriptor";

export interface IDescriptor<TProtoDecriptor extends Message> {
    /**
     * Returns the name of the entity (message, field etc) being described.
     */
    name: string;

    /**
     * Returns namespace of the entity being described.
     */
    namespace: string;

    /**
     * Returns full path of entry being described.
     */
    fullpath: string;

    /**
     * Returns the proto descriptor for this entity.
     */
    proto: TProtoDecriptor
}
