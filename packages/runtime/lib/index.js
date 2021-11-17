"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageTest_1 = require("./MessageTest");
const msg = new MessageTest_1.MessageTest();
msg.uuid = "Test1";
msg.displayName = "Test2";
console.log(msg.toObject());
const binary = msg.serializeBinary();
const msg2 = MessageTest_1.MessageTest.deserializeBinary(binary);
console.log(msg2.toObject());
//# sourceMappingURL=index.js.map