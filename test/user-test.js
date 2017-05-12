var user = require('../user');
var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');

describe('testing async functionality', function() {
  it('name should be Leanne Graham', function(done) {
    user.getUser()
      .then(res => {
        expect(res.data.name).to.equal('Leanne Graham');
        done();
      })
    // done();
    // let username = user.getUser();
    // expect(username).to.equal('alice or jane or whatever');
    // request('https://jsonplaceholder.typicode.com')
    //   .get('/users/1')
    //   .expect('Content-Type', /json/)
    //   .expect(200)
    //   .then(response => {
    //     // assert(response.body.email, 'foo@bar.com')
    //     let user = response.body;
    //     expect(user.name).to.equal('Leanne Graham');
    //     done();
    //     // console.log(response.body);
    //   })
  });
})