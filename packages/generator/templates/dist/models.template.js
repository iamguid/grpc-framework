"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _header = _interopRequireDefault(require("./header.template"));

var _imports = _interopRequireDefault(require("./imports.template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ctx => "" + ("" + (0, _header.default)({
  "packageName": ctx.wrapper.file.package,
  "fileName": ctx.wrapper.fileName
}, [])) + ("" + "" + "\n") + ("" + (0, _imports.default)({
  "imports": ctx.imports
}, ["" + ("" + `import * as jspb from "google-protobuf"` + "\n")])) + ("" + "" + "\n") + ("" + MessagesRecursiveTempl({
  "messages": ctx.messges,
  "enums": ctx.enums
}, []));

exports.default = _default;

const MessagesRecursiveTempl = ({
  messages,
  enums
}) => "" + ("" + messages.map(message => "" + ("" + MessageIfaceTempl({
  "message": message
}, [])) + ("" + "" + "\n") + ("" + MessageModelTempl({
  "message": message
}, [])) + ("" + "" + "\n") + ("" + (message.mesages.length > 0 || message.enums.length > 0 ? "" + ("" + `export namespace ${message.modelName} {` + "\n") + ("" + ("" + ("" + MessagesRecursiveTempl({
  "messages": message.mesages,
  "enums": message.enums
}, [])))) + ("" + `}` + "\n") : ""))).join("")) + ("" + "" + "\n") + ("" + enums.map(enm => "" + ("" + EnumTempl({
  "enm": enm
}, []))).join(""));

const MessageIfaceTempl = ({
  message
}) => "" + ("" + `export interface ${message.ifaceName} {` + "\n") + ("" + ("" + ("" + message.fields.map(field => "" + ("" + (field.isMap ? "" + ("\xA0\xA0\xA0\xA0" + `${field.fieldName}: Record<${field.mapType.keyType}, ${field.mapType.valueType}>;` + "\n") : "" + ("\xA0\xA0\xA0\xA0" + `${field.fieldName}: ${field.fieldType};` + "\n")))).join("")))) + ("" + `}` + "\n");

const MessageModelTempl = ({
  message
}) => "" + ("" + `export class ${message.modelName} implements ${message.ifaceName} extends jspb.Message {` + "\n") + ("" + ("" + ("" + message.fields.map(field => "" + ("" + (field.isMap ? "" + ("\xA0\xA0\xA0\xA0" + `public get ${field.fieldName}(): Record<${field.mapType.keyType}, ${field.mapType.valueType}> {` + "\n") + ("" + ("" + ("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + `return void;` + "\n"))) + ("\xA0\xA0\xA0\xA0" + `}` + "\n") + ("\xA0\xA0\xA0\xA0" + "" + "\n") + ("\xA0\xA0\xA0\xA0" + `public set ${field.fieldName}(value: Record<${field.mapType.keyType}, ${field.mapType.valueType}>): void {` + "\n") + ("" + ("" + ("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + `return void;` + "\n"))) + ("\xA0\xA0\xA0\xA0" + `}` + "\n") : "" + ("\xA0\xA0\xA0\xA0" + `public get ${field.fieldName}(): ${field.fieldType} {` + "\n") + ("" + ("" + ("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + `return void;` + "\n"))) + ("\xA0\xA0\xA0\xA0" + `}` + "\n") + ("\xA0\xA0\xA0\xA0" + "" + "\n") + ("\xA0\xA0\xA0\xA0" + `public set ${field.fieldName}(value: ${field.fieldType}): void {` + "\n") + ("" + ("" + ("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + `return void;` + "\n"))) + ("\xA0\xA0\xA0\xA0" + `}` + "\n")))).join("")))) + ("" + `}` + "\n");

const EnumTempl = ({
  enm
}) => "" + ("" + `export enum ${enm.name} {` + "\n") + ("" + ("" + ("" + enm.fields.map(field => "" + ("\xA0\xA0\xA0\xA0" + `${field.fieldName} = ${field.fieldValue},` + "\n")).join("")))) + ("" + `}` + "\n");