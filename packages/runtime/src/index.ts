import { MessageTest } from "./MessageTest";

const msg = new MessageTest();
msg.uuid = "Test1";
msg.displayName = "Test2";

console.log(msg.toObject());

const binary = msg.serializeBinary();

const msg2 = MessageTest.deserializeBinary(binary);

console.log(msg2.toObject());