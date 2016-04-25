'use strict';

/*
 * Checks if the given value is a native function.
 *
 * ref:
 * - https://davidwalsh.name/detect-native-function
 * - https://github.com/lodash/lodash/blob/master/lodash.js#L11115
 */


var isNil    = require('is-nil');
var toSource = require('to-source-code');

function isObject(value) {

  if (!value) {
    return false;
  }

  var type = typeof value;
  return type === 'object' || type === 'function';
}

// Checks if `value` is a host object in IE < 9.
function isHostObject(value) {

  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.

  var result = false;
  if (!isNil(value) && typeof value.toString !== 'function') {
    try {
      result = ('' + value) !== '';
    } catch (e) {}
  }
  return result;
}

function isFunction(value) {
  var tag = isObject(value) ? Object.prototype.toString.call(value) : '';
  return tag === '[object Function]' || tag === '[object GeneratorFunction]';
}


module.exports = function (value) {

  if (!isObject(value)) {
    return false;
  }

  if (isFunction(value) || isHostObject(value)) {

    var fnToString     = Function.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var reIsNative = new RegExp('^' +
      fnToString
        .call(hasOwnProperty)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    return reIsNative.test(toSource(value));
  }

  // used to detect host constructors (Safari > 4; really typed array specific)
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  return reIsHostCtor.test(toSource(value));
};
