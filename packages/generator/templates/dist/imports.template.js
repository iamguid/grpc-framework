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
  imports
}, children) => "" + (() => {
  const expr = children;
  return Array.isArray(expr) ? expr.join('') : expr;
})() + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + (() => {
  const expr = imports.map(imprt => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `import * as ${imprt.name} from "${imprt.path}";` + "\n"));
  return Array.isArray(expr) ? expr.join('') : expr;
})();

exports.default = _default;