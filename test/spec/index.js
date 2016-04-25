'use strict';

var expect = require('chai').expect;

describe('is-native', function () {

  var isNative = require('../../');

  it('should return `true` for native methods', function () {

    var obj = { a: 1 };
    var arr = [1, 2, 3];

    expect(isNative(obj.valueOf)).to.be.true;
    expect(isNative(arr.push)).to.be.true;
    expect(isNative(Math.min)).to.be.true;
  });

  it('should return `false` for non-native methods', function () {

    expect(isNative(function () {})).to.be.false;

    expect(isNative()).to.be.false;
    expect(isNative(123)).to.be.false;
    expect(isNative('')).to.be.false;
    expect(isNative('abc')).to.be.false;
    expect(isNative(void 0)).to.be.false;
    expect(isNative(true)).to.be.false;
    expect(isNative({ a: 1 })).to.be.false;
    expect(isNative([1, 2, 3])).to.be.false;
    expect(isNative(NaN)).to.be.false;
    expect(isNative(/x/)).to.be.false;
    expect(isNative(new Date)).to.be.false;
    expect(isNative(new Error)).to.be.false;
  });
});
