const supertest = require('supertest');
const router = require('./../app');


test('router returns 400 if the user does not exist', (done) => {
  supertest(router)
      .post("/api/v1/login")
      .send({email: 'user@gmail.com', password: 'hohoho123123'})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
});

test('router returns 400 if there is no password', (done) => {
  supertest(router)
      .post("/login")
      .send({email: 'user@gmail.com', password: ''})
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        done();
      });
});

test('router returns 400 if there is no email', (done) => {
  supertest(router)
      .post("/login")
      .send({email: '', password: 'hohoho123123'})
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        done();
      });
});
