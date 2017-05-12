var names = require('../names');
var chai = require('chai');
var expect = chai.expect;

describe('testing names', function() {
    it('should have names', function() {
        let n = names.getAllNames();
        
        expect(n).to.have.lengthOf(5);
    })
    
    it('should return first name from the list of names', function() {
        let n = names.getFirstName();
        expect(n).to.be.a('string');
        expect(n).to.equal('alice');
    })
})