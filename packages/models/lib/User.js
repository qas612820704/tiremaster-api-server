"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.schema = void 0;

var _mongoose = require("mongoose");

var _bcrypt = require("bcrypt");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var schema = {
  username: String,
  password: String,
  name: String
};
exports.schema = schema;
var User = new _mongoose.Schema(schema);
User.pre('save', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var hashedPassword;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _bcrypt.hash)(this.password, 10);

        case 2:
          hashedPassword = _context.sent;
          this.password = hashedPassword;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

var _default = (0, _mongoose.model)('user', User);

exports["default"] = _default;