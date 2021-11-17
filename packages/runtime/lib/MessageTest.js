"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTest = void 0;
const pbjs = require("google-protobuf");
class MessageTest extends pbjs.Message {
    constructor(opt_data) {
        super();
        pbjs.Message.initialize(this, opt_data, 0, -1, null, null);
    }
    get uuid() {
        return pbjs.Message.getFieldWithDefault(this, 1, "");
    }
    set uuid(value) {
        pbjs.Message.setProto3StringField(this, 1, value);
    }
    get displayName() {
        return pbjs.Message.getFieldWithDefault(this, 2, "");
    }
    set displayName(value) {
        pbjs.Message.setProto3StringField(this, 2, value);
    }
    serializeBinary() {
        var writer = new pbjs.BinaryWriter();
        MessageTest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            uuid: this.uuid,
            displayName: this.displayName,
        };
    }
    static deserializeBinary(bytes) {
        const msg = new MessageTest();
        const reader = new pbjs.BinaryReader(bytes);
        return MessageTest.deserializeBinaryFromReader(msg, reader);
    }
    static deserializeBinaryFromReader(msg, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup()) {
                break;
            }
            const field = reader.getFieldNumber();
            switch (field) {
                case 1:
                    msg.uuid = reader.readString();
                    break;
                case 2:
                    msg.displayName = reader.readString();
                    break;
                default:
                    reader.skipField();
                    break;
            }
        }
        return msg;
    }
    static serializeBinaryToWriter(msg, writer) {
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
    static toObject(includeInstance, msg) {
        return {
            uuid: msg.uuid,
            displayName: msg.displayName,
        };
    }
}
exports.MessageTest = MessageTest;
MessageTest.extensions = {};
MessageTest.extensionsBinary = {};
//# sourceMappingURL=MessageTest.js.map