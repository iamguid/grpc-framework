import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";

export class EnumFieldDescriptor extends BaseDescriptor {
    public readonly fieldName: string;
    public readonly fieldValue: number;

    constructor(props: IBaseDescriptorProps & {
        fieldName: string,
        fieldValue: number,
    }) {
        super(props)
        this.fieldName = props.fieldName;
        this.fieldValue = props.fieldValue;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            fieldName: this.fieldName,
            fieldValue: this.fieldValue
        })
    }
}
