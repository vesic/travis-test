var red = require('../red');
var chai = require('chai');
var expect = chai.expect;

describe('testing red', function() {
    it('it should be red', function() {
        expect(red.main()).to.equal('Red');
    })
    
    it('should return red as hex', function() {
        expect(red.toHexVal()).to.equal('#F00');
    })
})