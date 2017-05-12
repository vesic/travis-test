var util = require('../util');
var chai = require('chai');
var expect = chai.expect;

describe('testing util.js', function() {
    it('should return string hello', function() {
        expect(util.hello()).to.equal('hello');
    })
})