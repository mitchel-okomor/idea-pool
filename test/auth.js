var expect = require('chai').expect;
var request = require('request');
let loginToken;
let id;

let base_url = 'http://localhost:8000/';

describe('Api endpoints', () => {
  before((done) => {
    let form = {
      email: 'peterpaul@gmail.com',
      password: 'peter',
    };
    request.post(
      { url: base_url + 'signin', form },
      function (error, response, body) {
        if (error) {
          return console.error('upload failed: ', error);
        }
        loginToken = JSON.parse(body).data.token;
        id = JSON.parse(body).data.userId;
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});
