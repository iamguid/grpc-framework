"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-plugin-tsxt");

var _header = _interopRequireDefault(require("./header.template"));

var _imports = _interopRequireDefault(require("./imports.template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ctx => "" + ("" + (0, _header.default)({
  "packageName": ctx.wrapper.file.package,
  "fileName": ctx.wrapper.fileName
}, [])) + ("" + "" + "\n") + ("" + (0, _imports.default)({
  "imports": ctx.imports
}, ["" + ("" + `import * as grpcWeb from "grpc-web"` + "\n") + ("" + `import * as jspb from "google-protobuf"` + "\n")])) + ("" + "" + "\n") + ("" + ClientsTempl({
  "clients": ctx.clients
}, []));

exports.default = _default;

const ClientsTempl = ({
  clients
}) => "" + ("" + clients.map(client => "" + ("" + ClientInterfaceTempl({
  "client": client
}, [])) + ("" + "" + "\n") + ("" + ClientClassTempl({
  "client": client
}, [])) + ("" + "" + "\n")));

const ClientInterfaceTempl = ({
  client
}) => "" + ("" + `export interface ${client.interfaceClassName} {` + "\n") + ("" + ("" + ("" + client.methods.map(client => client.isServerStreaming ? "" + ("\xA0\xA0\xA0\xA0" + `${client.methodName}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => grpcWeb.ClientReadableStream<${client.outputType}>;` + "\n") : "" + ("\xA0\xA0\xA0\xA0" + `${client.methodName}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => Promise<${client.outputType}>;` + "\n")).join("")))) + ("" + `}` + "\n");

const ClientClassTempl = ({
  client
}) => "" + ("" + `export class ${client.clientClassName} extends ${client.interfaceClassName} {` + "\n") + ("" + ("" + ("" + client.methods.map(client => "" + ("\xA0\xA0\xA0\xA0" + `public ${client.methodName}(request: ${client.inputType}, metadata: grpcWeb.Metadata) {` + "\n") + ("" + ("" + ("" + (client.isServerStreaming ? "" + ("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + `retrun void;` + "\n") : "" + ("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + `retrun void;` + "\n"))))) + ("\xA0\xA0\xA0\xA0" + `}` + "\n")).join("")))) + ("" + `}` + "\n");