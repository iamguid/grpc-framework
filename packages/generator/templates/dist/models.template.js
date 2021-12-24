"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
}, ["" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `import * as jspb from "google-protobuf"` + "\n")])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + MessagesRecursiveTempl({
  "messages": ctx.messges,
  "enums": ctx.enums
}, []));

exports.default = _default;

const MessagesRecursiveTempl = ({
  messages,
  enums
}) => "" + ("" + messages.map(message => "" + ("" + MessageIfaceTempl({
  "message": message
}, [])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + MessageModelTempl({
  "message": message
}, [])) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + (message.mesages.length > 0 || message.enums.length > 0 ? "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export namespace ${message.modelName} {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + MessagesRecursiveTempl({
  "messages": message.mesages,
  "enums": message.enums
}, [])) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") : ""))).join("")) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + enums.map(enm => "" + ("" + EnumTempl({
  "enm": enm
}, []))).join("")) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n");

const MessageIfaceTempl = ({
  message
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export interface ${message.ifaceName} {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + message.fields.map(field => {
  switch (true) {
    case field.isMap:
      {
        return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldName}: Record<${field.mapType.keyType}, ${field.mapType.valueType}>;` + "\n");
      }

    case field.isOneof:
      {
        return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldName}?: ${field.fieldType};` + "\n");
      }

    default:
      {
        return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldName}: ${field.fieldType};` + "\n");
      }
  }
}).join("")) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");

const MessageModelTempl = ({
  message
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export class ${message.modelName} implements ${message.ifaceName} extends jspb.Message {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `contructor(opt_data: Array[]) {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `jspb.Message.initialize(this, opt_data, ${message.messageIndex}, $pivot$, $rptfields$, $oneoffields$);` + "\n") + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + message.fields.map(field => {
  switch (true) {
    case field.isMap:
      {
        return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public get ${field.fieldName}(): jspb.Map<${field.mapType.keyType}, ${field.mapType.valueType}> {` + "\n") + ("" + ("" + ("" + (() => {
          globalThis.__tsxt__.indent++;
          return "";
        })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return jspb.Message.getMapField(this, ${field.fieldNumber}, false, null));` + "\n") + (() => {
          globalThis.__tsxt__.indent--;
          return "";
        })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n");
      }

    case field.isOneof:
      {
        return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public get ${field.fieldName}(): ${field.fieldType} {` + "\n") + ("" + ("" + ("" + (() => {
          globalThis.__tsxt__.indent++;
          return "";
        })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return void;` + "\n") + (() => {
          globalThis.__tsxt__.indent--;
          return "";
        })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public set ${field.fieldName}(value: ${field.fieldType}): void {` + "\n") + ("" + ("" + ("" + (() => {
          globalThis.__tsxt__.indent++;
          return "";
        })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return void;` + "\n") + (() => {
          globalThis.__tsxt__.indent--;
          return "";
        })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");
      }

    default:
      {
        return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public get ${field.fieldName}(): ${field.fieldType} {` + "\n") + ("" + ("" + ("" + (() => {
          globalThis.__tsxt__.indent++;
          return "";
        })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return void;` + "\n") + (() => {
          globalThis.__tsxt__.indent--;
          return "";
        })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public set ${field.fieldName}(value: ${field.fieldType}): void {` + "\n") + ("" + ("" + ("" + (() => {
          globalThis.__tsxt__.indent++;
          return "";
        })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return void;` + "\n") + (() => {
          globalThis.__tsxt__.indent--;
          return "";
        })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");
      }
  }
}).join("")) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");

const EnumTempl = ({
  enm
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export enum ${enm.name} {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + enm.fields.map(field => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldName} = ${field.fieldValue},` + "\n")).join("")) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");