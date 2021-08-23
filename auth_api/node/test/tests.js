import chai from 'chai';
import { loginFunction } from '../services/login'
import { protectFunction } from '../services/protected'

const expect = chai.expect;

describe('loginFunction()', function () {
  it('Test login admin', function () {
    loginFunction("admin", "secret").then(result => {
      expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjk3NDM0MDcsImV4cCI6MTYyOTc0NDg0N30.vJJTSd1QHt36kkbZUkmdm9GZ7DImIHcFqMLoDxn9BfI").to.be.equal(result);
    })
  });

  it('Test login noadmin', function () {
    loginFunction("noadmin", "noPow3r").then(result => {
      expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjk3NDM0MDcsImV4cCI6MTYyOTc0NDg0N30.vJJTSd1QHt36kkbZUkmdm9GZ7DImIHcFqMLoDxn9BfI").to.be.equal(result);
    })
  });

  it('Test login bob', function () {
    loginFunction("bob", "thisIsNotAPasswordBob").then(result => {
      expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjk3NDM0MDcsImV4cCI6MTYyOTc0NDg0N30.vJJTSd1QHt36kkbZUkmdm9GZ7DImIHcFqMLoDxn9BfI").to.be.equal(result);
    })
  });

});

describe('protectFunction()', function () {
  it('Test protected', function () {
    protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjk3NDM0MDcsImV4cCI6MTYyOTc0NDg0N30.vJJTSd1QHt36kkbZUkmdm9GZ7DImIHcFqMLoDxn9BfI").then (result => {
      expect("You are under protected data").to.be.equal(result);
    })
  });

  it('Test protected unauthorized', function () {
    protectFunction("xyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mjk3NDM0MDcsImV4cCI6MTYyOTc0NDg0N30.vJJTSd1QHt36kkbZUkmdm9GZ7DImIHcFqMLoDxn9BfI").then (result => {
      expect("unauthorized").to.be.equal(result);
    })
  });

});
