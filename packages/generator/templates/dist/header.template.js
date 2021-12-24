"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-plugin-tsxt");

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

var _default = ({
  packageName,
  fileName
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `// @ts-nocheck` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `//` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `// GENERATED CODE -- DO NOT EDIT!` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `//` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `// package: ${packageName}` + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + `// file: ${fileName}` + "\n");

exports.default = _default;