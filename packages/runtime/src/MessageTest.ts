import * as pbjs from "google-protobuf";

export interface IMessageTest {
    uuid: string;
    displayName: string;
}

export class MessageTest extends pbjs.Message implements IMessageTest {
    constructor(opt_data?: any) {
        super();
        pbjs.Message.initialize(this, opt_data, 0, -1, null, null);
    }

    public get uuid() {
        return pbjs.Message.getFieldWithDefault(this, 1, "")
    }

    public set uuid(value: string) {
        (pbjs.Message as any).setProto3StringField(this, 1, value)
    }

    public get displayName() {
        return pbjs.Message.getFieldWithDefault(this, 2, "")
    }

    public set displayName(value: string) {
        (pbjs.Message as any).setProto3StringField(this, 2, value)
    }

    public serializeBinary(): Uint8Array {
        var writer = new pbjs.BinaryWriter();
        MessageTest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }

    public toObject(): IMessageTest {
        return {
            uuid: this.uuid,
            displayName: this.displayName,
        }
    }

    public static deserializeBinary(bytes: Uint8Array): MessageTest {
        const msg = new MessageTest()
        const reader = new pbjs.BinaryReader(bytes);
        return MessageTest.deserializeBinaryFromReader(msg, reader) as MessageTest;
    }

    public static deserializeBinaryFromReader(msg: MessageTest, reader: pbjs.BinaryReader): pbjs.Message {
        while (reader.nextField()) {
            if (reader.isEndGroup()) {
                break;
            }

            const field = reader.getFieldNumber();
            switch (field) {
                case 1: msg.uuid = reader.readString(); break;
                case 2: msg.displayName = reader.readString(); break;
                default: reader.skipField(); break;
            }
        }

        return msg;
    }

    public static serializeBinaryToWriter(msg: MessageTest, writer: pbjs.BinaryWriter): void {
        var f = undefined;
        f = msg.uuid;
        if (f.length > 0) {
            writer.writeString(1, f);
        }
        f = msg.displayName;
        if (f.length > 0) {
            writer.writeString(2, f);
        }
    }

    public static toObject(includeInstance: boolean, msg: MessageTest): {} {
        return {
            uuid: msg.uuid,
            displayName: msg.displayName,
        }
    }

    public static extensions: { [key: number]: pbjs.ExtensionFieldInfo<IMessageTest> } = {}
    public static extensionsBinary: { [key: number]: pbjs.ExtensionFieldBinaryInfo<IMessageTest> } = {}
}