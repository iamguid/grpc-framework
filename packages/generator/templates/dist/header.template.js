"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-plugin-tsxt");

var _default = ({
  packageName,
  fileName
}) => "" + ("" + `// @ts-nocheck` + "\n") + ("" + `//` + "\n") + ("" + `// GENERATED CODE -- DO NOT EDIT!` + "\n") + ("" + `//` + "\n") + ("" + `// package: ${packageName}` + "\n") + ("" + `// file: ${fileName}` + "\n");

exports.default = _default;