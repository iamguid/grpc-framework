import * as pbjs from "google-protobuf";
export interface IMessageTest {
    uuid: string;
    displayName: string;
}
export declare class MessageTest extends pbjs.Message implements IMessageTest {
    constructor(opt_data?: any);
    get uuid(): string;
    set uuid(value: string);
    get displayName(): string;
    set displayName(value: string);
    serializeBinary(): Uint8Array;
    toObject(): IMessageTest;
    static deserializeBinary(bytes: Uint8Array): MessageTest;
    static deserializeBinaryFromReader(msg: MessageTest, reader: pbjs.BinaryReader): pbjs.Message;
    static serializeBinaryToWriter(msg: MessageTest, writer: pbjs.BinaryWriter): void;
    static toObject(includeInstance: boolean, msg: MessageTest): {};
    static extensions: {
        [key: number]: pbjs.ExtensionFieldInfo<IMessageTest>;
    };
    static extensionsBinary: {
        [key: number]: pbjs.ExtensionFieldBinaryInfo<IMessageTest>;
    };
}
