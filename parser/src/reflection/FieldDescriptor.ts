import { BaseDescriptor } from "./BaseDescriptor";

export class FieldDescriptor extends BaseDescriptor {
    public readonly type: string;
    public readonly tag: number;
}
