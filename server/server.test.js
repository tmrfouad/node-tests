const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {
  describe('Get /', () => {
    it('should return Hello Tamer! response', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            error: 'page not found'
          });
        })
        .end(done);
    });
  });

  describe('Get /users', () => {
    it('should include my name in the users list', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: 'Tamer', age: 35 });
        })
        .end(done);
    });
  });
});
