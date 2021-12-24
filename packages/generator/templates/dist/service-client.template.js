"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-plugin-tsxt");

var _header = _interopRequireDefault(require("./header.template"));

var _imports = _interopRequireDefault(require("./imports.template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  if (typeof globalThis === 'object') return;
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function () {
      return this;
    },
    configurable: true
  });
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
})();

if (typeof globalThis.__tsxt__ === "undefined") {
  globalThis.__tsxt__ = {
    indent: 0
  };
}

var _default = ctx => "" + ("" + (0, _header.default)({
  "packageName": ctx.wrapper.file.package,
  "fileName": ctx.wrapper.fileName
}, [])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + (0, _imports.default)({
  "imports": ctx.imports
}, ["" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `import * as grpcWeb from "grpc-web"` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `import * as jspb from "google-protobuf"` + "\n")])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + ClientsTempl({
  "clients": ctx.clients
}, []));

exports.default = _default;

const ClientsTempl = ({
  clients
}) => "" + ("" + clients.map(client => "" + ("" + ClientInterfaceTempl({
  "client": client
}, [])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + ClientClassTempl({
  "client": client
}, [])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n")));

const ClientInterfaceTempl = ({
  client
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export interface ${client.interfaceClassName} {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + client.methods.map(client => client.isServerStreaming ? "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${client.methodName}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => grpcWeb.ClientReadableStream<${client.outputType}>;` + "\n") : "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${client.methodName}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => Promise<${client.outputType}>;` + "\n")).join("")) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");

const ClientClassTempl = ({
  client
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export class ${client.clientClassName} extends ${client.interfaceClassName} {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + client.methods.map(client => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public ${client.methodName}(request: ${client.inputType}, metadata: grpcWeb.Metadata) {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + (client.isServerStreaming ? "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `retrun void;` + "\n") : "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `retrun void;` + "\n"))) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n")).join("")) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");