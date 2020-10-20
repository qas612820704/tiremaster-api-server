"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Tire = new _mongoose.Schema({
  number: Number,
  width: Number,
  flat_ratio: Number,
  brand: String,
  year: Number,
  manufacturer: String,
  price: Number,
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: Date
});
Tire.pre('save', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          this.updated_at = Date.now();

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

var _default = (0, _mongoose.model)('Tire', Tire);

exports["default"] = _default;