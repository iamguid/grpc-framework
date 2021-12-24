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
}, children) => "" + ("" + children) + (" ".repeat(globalThis.__tsxt__.indent * 4) + "" + "\n") + ("" + imports.map(imprt => "" + (" ".repeat(globalThis.__tsxt__.indent * 4) + `import * as ${imprt.name} from "${imprt.path}";` + "\n")).join(""));

exports.default = _default;