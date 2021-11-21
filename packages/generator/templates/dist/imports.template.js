"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-plugin-tsxt");

var _default = ({
  imports
}, children) => "" + ("" + children) + ("" + "" + "\n") + ("" + imports.map(imprt => "" + ("" + `import * as ${imprt.name} from "${imprt.path}";` + "\n")).join(""));

exports.default = _default;