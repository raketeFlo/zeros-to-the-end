/* eslint-disable no-undef */
require('chai').should();
const moveZeros = require('./index');

describe('moveZeros', () => {
  it('should return an array', () => {
    moveZeros([0, 1]).should.be.a('array');
  });
  it('should only move zeros to the end', () => {
    moveZeros([0, 1, 2, 0.0, 1, false, 1, '0', 3, 0, 1]).should.eql([1, 2, 1, false, 1, '0', 3, 1, 0, 0, 0]);
    moveZeros([false, 0, null, 1, 0, 2]).should.eql([false, null, 1, 2, 0, 0]);
    moveZeros(['zero', 'O', null, 1, 0, 4]).should.eql(['zero', 'O', null, 1, 4, 0]);
  });
  it('should not modify the original array', () => {
    const arr = [1, 0, 1, 3, 2, 0, 2];
    const res = moveZeros(arr);
    arr.should.not.equal(res);
  });
});
