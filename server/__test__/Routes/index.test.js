const supertest = require('supertest');
const router = require('../../app');
const { getUser } = require("../../database/queries");
const build = require("../../database/config/build");
const connection = require("../../database/config/connection");

beforeEach(()=> build());
afterAll(()=>connection.end());

test('router returns 400 if there is no password', (done) => {
  supertest(router)
      .post("/api/v1/login")
      .send({email: 'user@gmail.com', password: ''})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
});

test('router returns 400 if there is no email', (done) => {
  supertest(router)
      .post("/api/v1/login")
      .send({email: '', password: 'hohoho123123'})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
});


test('router returns 200 if user logged in successfully', (done)=>{
  supertest(router)
  .post("/api/v1/login")
  .send(JSON.stringify({email: 'zein@gmail.com', password: 'zein2002jendeya'}))
  .set({
      'Content-Type': 'application/json',
    })
  .expect(200)
  .end((err, res)=> {
    if( err) return done(err);
    expect(res.status).toBe(200);
    done();
  });
})

test('router returns 401 if password is incorrect', (done)=>{
  supertest(router)
  .post("/api/v1/login")
  .set({
    'Content-Type': 'application/json',
  })
  .send(JSON.stringify({email: 'zein@gmail.com', password: 'zein2002j'}))
  .expect(401)
  .expect('Content-Type', /json/)
  .end((err, res)=> {
    if( err) return done(err);
    else
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('invalid password')
    return done()
  });
})

test('router returns 401 if email is incorrect', (done) => {
  supertest(router)
      .post("/api/v1/login")
      .send({email: 'user@gmail.com', password: 'dddddd888'})
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(401);
        done();
      });
});