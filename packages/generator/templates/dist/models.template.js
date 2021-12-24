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

const getRepeatedFieldsArray = message => {
  return message.fields.filter(field => field.isRepeated).map(field => field.fieldNumber);
};

const getOneofGroups = message => {
  return message.fields.filter(field => field.isOneof).reduce((accum, field) => {
    if (accum.findIndex(group => group.name === field.oneofName) === -1) {
      accum.push({
        name: field.oneofName,
        fields: []
      });
    }

    const currentGroup = accum.find(group => group.name === field.oneofName);
    currentGroup.fields.push(field.fieldNumber);
    return accum;
  }, []);
};

const getOneofGroupsArray = message => {
  return getOneofGroups(message).map(groups => {
    return [...groups.fields];
  });
};

const getOneofGroupsArrayIndex = (message, oneofName) => {
  return getOneofGroups(message).findIndex(group => group.name === oneofName);
};

const fieldDefault = field => {
  if (field.isRepeated) {
    return "[]";
  }

  if (field.isMessageType) {
    return "null";
  }

  switch (field.fieldRawType) {
    case "int32":
    case "uint32":
    case "float":
    case "double":
      return "0";

    case "int64":
    case "uint64":
      return "0n";

    case "bool":
      return "false";

    case "string":
      return "\"\"";

    case "bytes":
      return "new Uint8Array()";
  }

  throw new Error(`Cannot get default JS type ${field.fieldRawType}`);
};

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

const renderOneofGroupsArray = groups => {
  let result = [];

  for (const group of groups) {
    result.push(`[${group.join(', ')}]`);
  }

  return `[${result.join(', ')}]`;
};

const MessageFieldGetterBody = ({
  field
}) => {
  let useDefault = true; // Repeated fields get initialized to their default in the constructor
  // (why?), so we emit a plain getField() call for them.

  if (field.isRepeated) {
    useDefault = false;
  }

  const isBoolean = field.fieldRawType == "bool";
  const isFloatOrDouble = field.fieldRawType == "float" || field.fieldRawType == "double";
  const cardinality = field.isRepeated ? "Repeated" : "";
  const withDefault = useDefault ? "WithDefault" : "";
  const defaultArg = useDefault ? fieldDefault(field) : "";
  let type = "";

  if (isFloatOrDouble) {
    type = "FloatingPoint";
  }

  if (isBoolean) {
    type = "Boolean";
  } // Prints the appropriate function, among:
  // - getField
  // - getBooleanField
  // - getFloatingPointField => Replaced by getOptionalFloatingPointField to
  //   preserve backward compatibility.
  // - getFieldWithDefault
  // - getBooleanFieldWithDefault
  // - getFloatingPointFieldWithDefault
  // - getRepeatedField
  // - getRepeatedBooleanField
  // - getRepeatedFloatingPointField


  if (isFloatOrDouble && !field.isRepeated && !useDefault) {
    return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `jspb.Message.getOptionalFloatingPointField(` + "\n") + ("" + ("" + ("" + (() => {
      globalThis.__tsxt__.indent++;
      return "";
    })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `this,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldNumber}` + "\n") + (() => {
      globalThis.__tsxt__.indent--;
      return "";
    })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `)` + "\n");
  } else {
    return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `jspb.Message.get${cardinality}${type}Field${withDefault}(` + "\n") + ("" + ("" + ("" + (() => {
      globalThis.__tsxt__.indent++;
      return "";
    })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `this,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldNumber},` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${defaultArg}` + "\n") + (() => {
      globalThis.__tsxt__.indent--;
      return "";
    })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `)` + "\n");
  }
};

const MessageModelTempl = ({
  message
}) => {
  const repeatedFieldsArray = getRepeatedFieldsArray(message);
  const oneofGroupsArray = getOneofGroupsArray(message);
  return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export class ${message.modelName} implements ${message.ifaceName} extends jspb.Message {` + "\n") + ("" + ("" + ("" + (() => {
    globalThis.__tsxt__.indent++;
    return "";
  })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `private static repeatedFields: number[] = [${repeatedFieldsArray.join(', ')}];` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `private static oneofFieldsGroups: number[] = ${renderOneofGroupsArray(oneofGroupsArray)};` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `contructor(opt_data: any) {` + "\n") + ("" + ("" + ("" + (() => {
    globalThis.__tsxt__.indent++;
    return "";
  })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `jspb.Message.initialize(` + "\n") + ("" + ("" + ("" + (() => {
    globalThis.__tsxt__.indent++;
    return "";
  })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `this,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `opt_data,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `0,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${message.pivot},` + "\n") + ("" + (repeatedFieldsArray.length > 0 ? `${message.modelName}.repeatedFields,` : `null,`)) + ("" + (oneofGroupsArray.length > 0 ? `${message.modelName}.oneofFieldsGroups` : `null`)) + (() => {
    globalThis.__tsxt__.indent--;
    return "";
  })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `)` + "\n") + (() => {
    globalThis.__tsxt__.indent--;
    return "";
  })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + message.fields.map(field => {
    switch (true) {
      case field.isMap:
        {
          return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public get ${field.fieldName}(): jspb.Map<${field.mapType.keyType}, ${field.mapType.valueType}> {` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return jspb.Message.getMapField(` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `this,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldNumber},` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `false,` + "\n") + ("" + (field.mapType.valueTypeIsMessage ? field.mapType.valueType : 'null')) + (() => {
            globalThis.__tsxt__.indent--;
            return "";
          })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `);` + "\n") + (() => {
            globalThis.__tsxt__.indent--;
            return "";
          })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n");
        }

      case field.isMessageType:
        {
          return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public get ${field.fieldName}(): ${field.fieldType} {` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return jspb.Message.get${field.isRepeated ? 'Repeated' : ''}WrapperField(` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `this,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldType},` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldNumber}` + "\n") + (() => {
            globalThis.__tsxt__.indent--;
            return "";
          })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `);` + "\n") + (() => {
            globalThis.__tsxt__.indent--;
            return "";
          })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public set ${field.fieldName}(value: ${field.fieldType}): void {` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `return jspb.Message.set${field.isOneof ? 'Oneof' : ''}${field.isRepeated ? 'Repeated' : ''}WrapperField(` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `this,` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldNumber},` + "\n") + ("" + (field.oneofName ? `${message.modelName}.oneofFieldsGroups[${getOneofGroupsArrayIndex(message, field.oneofName)}],` : '')) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `value` + "\n") + (() => {
            globalThis.__tsxt__.indent--;
            return "";
          })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `)` + "\n") + (() => {
            globalThis.__tsxt__.indent--;
            return "";
          })())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");
        }

      default:
        {
          return "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `public get ${field.fieldName}(): ${field.fieldType} {` + "\n") + ("" + ("" + ("" + (() => {
            globalThis.__tsxt__.indent++;
            return "";
          })()) + ("" + MessageFieldGetterBody({
            "field": field
          }, [])) + (() => {
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
};

const EnumTempl = ({
  enm
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `export enum ${enm.name} {` + "\n") + ("" + ("" + ("" + (() => {
  globalThis.__tsxt__.indent++;
  return "";
})()) + ("" + enm.fields.map(field => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `${field.fieldName} = ${field.fieldValue},` + "\n")).join("")) + (() => {
  globalThis.__tsxt__.indent--;
  return "";
})())) + (" ".repeat(globalThis.__tsxt__.indent * 4) + `}` + "\n");