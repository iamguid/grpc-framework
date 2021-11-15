export interface IDescriptor {
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
     * Converts descriptor to javascript object.
     */
    toObject: () => Object;
}
