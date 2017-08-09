'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var service = {
  /**
   * Determines whether validating element is string
   * @param {any} s validation target
   * @return {boolean}
   */
  String: _lodash.isString,

  /**
   * Matches regular expression suplied as string
   * @param {any} s source
   * @param {any} p regex pattern
   */
  regex: function regex(s, p) {
    var pattern = new RegExp(p);
    return (0, _lodash.isString)(s) && pattern && pattern.test(s);
  },


  /**
   * Requires the string value to contain only a-z, A-Z, and 0-9.
   * @param {any} s source
   */
  alphanum: function alphanum(s) {
    return (0, _lodash.isString)(s) && /^[a-zA-Z0-9]+$/.test(s);
  },


  /**
   * Determines whether the specified string is lowercase
   * @param {any} s source
   */
  lowercase: function lowercase(s) {
    return (0, _lodash.isString)(s) && s === s.lowercase();
  },


  /**
   * Determines whether the specified string is uppercase
   * @param {any} s source
   */
  uppercase: function uppercase(s) {
    return (0, _lodash.isString)(s) && s === s.uppercase();
  },


  /**
   * Determines whether the specified string starts with
   * @param {any} s source
   * @param {any} p pattern
   */
  startsWith: _lodash.startsWith,

  /**
   * Determines whether the specified string ends with
   * @param {any} s source
   * @param {any} p pattern
   */
  endsWith: _lodash.endsWith

};

exports.default = service;