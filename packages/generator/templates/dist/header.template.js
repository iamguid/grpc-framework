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
}) => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + (() => {
  const expr = `// @ts-nocheck`;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + (() => {
  const expr = `//`;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + (() => {
  const expr = `// GENERATED CODE -- DO NOT EDIT!`;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + (() => {
  const expr = `//`;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + (() => {
  const expr = `// package: ${packageName}`;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + "\n") + (" ".repeat(globalThis.__tsxt__.indent * 4) + (() => {
  const expr = `// file: ${fileName}`;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + "\n");

exports.default = _default;