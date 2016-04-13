'use strict';

var expect = require('chai').expect;


describe('is-native', function () {

  var isNative = require('../../');

  it('common test', function () {
    expect(isNative(Math.min)).to.be.true;
    expect(isNative(function () {})).to.be.false;

    expect(isNative()).to.be.false;
    expect(isNative(123)).to.be.false;
    expect(isNative('')).to.be.false;
    expect(isNative('abc')).to.be.false;
    expect(isNative(void 0)).to.be.false;
    expect(isNative(true)).to.be.false;
    expect(isNative({})).to.be.false;
    expect(isNative([])).to.be.false;
    expect(isNative(NaN)).to.be.false;
  });
});
