var util = require('../util');
var chai = require('chai');
var expect = chai.expect;

describe('testing util.js', function() {
    it('should return string hello', function() {
        expect(util.hello()).to.equal('hello');
    })
    
    it('should return first letter of the string', function() {
        let str = 'hello';
        expect(util.returnFirstLetter(str)).to.equal('h');
    })
    
    it('should be a string', function() {
        let str = 'hello';
        expect(util.returnFirstLetter(str)).to.be.a('number');
    })
})