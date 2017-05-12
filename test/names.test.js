var names = require('../names');
var chai = require('chai');
var expect = chai.expect;

describe('testing names', function() {
    it('should have names', function() {
        let n = names.getAllNames();
        
        expect(n).to.have.lengthOf(5);
    })
})