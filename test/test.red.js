var red = require('../red');
var chai = require('chai');
var expect = chai.expect;

describe('testing red', function() {
    it('it should be red', function() {
        expect(red.main()).to.equal('Red');
    })
})