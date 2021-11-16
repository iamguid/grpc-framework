import { IDescriptor } from "./IDescriptor";

export class DescriptorsRegistry {
    public readonly descriptors: Map<string, IDescriptor> = new Map();

    public get(fullpath: string) {
        if (!this.descriptors.has(fullpath)) {
            throw new Error(`Descriptor "${fullpath}" not  found`)
        }

        return this.descriptors.get(fullpath)!;
    }

    public set(fullpath: string, descriptor: IDescriptor) {
        if (this.descriptors.has(fullpath)) {
            throw new Error(`Descriptor "${fullpath}" already exists`)
        }

        this.descriptors.set(fullpath, descriptor);
    }
}