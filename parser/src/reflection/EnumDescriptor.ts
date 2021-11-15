import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { EnumFieldDescriptor } from "./EnumFieldDescriptor";

export class EnumDescriptor extends BaseDescriptor {
    public readonly fields: EnumFieldDescriptor[];

    constructor(props: IBaseDescriptorProps & {
        fields: EnumFieldDescriptor[]
    }) {
        super(props);
        this.fields = props.fields;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            fields: this.fields.map(field => field.toObject())
        })
    }
}
