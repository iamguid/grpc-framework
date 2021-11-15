import { Message } from "google-protobuf";
import { FileDescriptor } from "./FileDescriptor";
import { IDescriptor } from "./IDescriptor";

/**
 * Defines reflection registry
 * 
 * Registry contains descriptors of .proto file
 */
export class ReflectionRegistry {
    /**
     * Contains all descriptors in .proto file.
     */
    private readonly entries: Map<string, IDescriptor<Message>> = new Map();

    constructor(private dependencies: FileDescriptor[]) {}

    public addEntry(descriptor: IDescriptor<Message>) {
        if (this.entries.has(descriptor.fullpath)) {
            throw new Error(`Entry descriptor ${descriptor.fullpath} already exist`);
        }

        this.entries.set(descriptor.fullpath, descriptor);
    }

    public getEntry<T extends IDescriptor<any>>(fullpath: string): T {
        if (this.entries.has(fullpath)) {
            return this.entries.get(fullpath)! as T
        }

        for (const dependency of this.dependencies) {
            if (dependency.registry.entries.has(fullpath)) {
                return dependency.registry.entries.get(fullpath)! as T
            }
        }

        throw new Error(`Entry descriptor ${fullpath} is not exist`);
    }
}
