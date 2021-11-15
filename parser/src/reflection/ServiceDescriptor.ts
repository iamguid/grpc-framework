import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { MethodDescriptor } from "./MethodDescriptor";

export class ServiceDescriptor extends BaseDescriptor {
    /**
     * Contains all method descriptors that defined in service 
     */
    public readonly methods: MethodDescriptor[] = [];

    constructor(props: IBaseDescriptorProps & {
        methods: MethodDescriptor[]
    }) {
        super(props);
        this.methods = props.methods;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            methods: this.methods.map(method => method.toObject()),
        })
    }
}
