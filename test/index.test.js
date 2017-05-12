var index = require('../index');
var chai = require('chai');
var expect = chai.expect;

describe('testing calculator', function() {

  it('shuld return 4', function() {
    expect(index.add(2, 2)).to.equal(4);
  })

  it('should not return a string', function() {
    expect(index.add(2, 2)).to.not.be.a('string');
  })

  it('should have length one', function() {
    expect('o').to.have.lengthOf(1);
  })

  it('should be 4 when 8 and 4 passed', function() {
    expect(index.sub(8, 4)).to.equal(4);
  })
  
  it('should not something other than 4 when 8 and 4 passed', function() {
    expect(index.sub(8, 4)).to.not.equal(5);
  })
  
  it('should return 4 when 2 and 2 are passed', function() {
    expect(index.multi(2, 2)).to.equal(5);
  })
  
});