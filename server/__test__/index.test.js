const request = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build')
const connection = require('../database/config/connection')


beforeEach(() => dbBuild());
afterAll(() => connection.end());


describe('sign up routes test', () => {
  test('check bad request, status should be 400 and message '"name" is required'', (done) => {
    return request(app)
      .post('/api/v1/signup')
      .expect(400)
          .send(JSON.stringify(
            {
              email: 'israssa25@gmail.com',
              password: '123abc',
              name: "",
              gender: "f",
              minAge: "254",
              maxAge: "40",
              weight: "510",
              height: "115",
              goalWeight: "48",
              username: "iman",
      }
          ))
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
       expect(res.body.message).toBe('"name" is required');

        done();
      });
  });


test(' check if email exist, status should be 409 and (user already exist)message ', (done) => {
  return request(app)
    .post('/api/v1/signup')
    .set({
      'Content-Type': 'application/json',
    })
    .send(
      JSON.stringify({
          username: "iman96",
          email: 'lina@gmail.com',
          password: '123abc',
          name: "iman sedky",
          gender: "f",
          minAge: "24",
          maxAge:"40",
          weight: "50",
          height: "155",
          goalWeight: "48",
         
      }),
    )
    .expect(409)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('user already exists');
      expect(res.statusCode).toBe(409);

      return done();
    });
});



test('check successful sign-up, status should be 200 and (signed up successfully) message', (done) => {
  return request(app)
    .post('/api/v1/signup')
    .set({
      'Content-Type': 'application/json',
    })
    .send(
      JSON.stringify({
        username: "iman96",
        email: 'imans.ewaiti@gmail.com',
        password: '123abc',
        name: "iman sedky",
        gender: "f",
        minAge: "24",
        maxAge:"40",
        weight: "50",
        height: "155",
        goalWeight: "48",
      }),
    )
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
       expect(res.statusCode).toBe(200);

      expect(res.body.message).toBe(
        'signed up successfully',
      );
      return done();
    });
});

 });



  



 


  








// test('signup route status 200, (signed up successfully) message', (done) => {
//   return request(app)
//     .post('/api/v1/signup')
//     .set({
//       'Content-Type': 'application/json',
//     })
//     .send(
//       JSON.stringify({
//         username: "iman96",
//         email: 'imans.ewaiti@gmail.com',
//         password: '123abc',
//         name: "iman sedky",
//         gender: "f",
//         minAge: "24",
//         maxAge:"40",
//         weight: "50",
//         height: "155",
//         goalWeight: "48",
//       }),
//     )
//     .expect(200)
//     .end((err, res) => {
//       if (err) return done(err);
//       expect(res.body.message).toBe(
//         'signed up successfully',
//       );
//       return done();
//     });
// });

// test('signup route, check missing name field (bad request)', (done) => {
//   return request(app)
//     .post('/api/v1/signup')
//     .set({
//       'Content-Type': 'application/json',
//     })
//     .send(
//       JSON.stringify({
//         username: "iman96",
//         email: 'imans.ewaiti@gmail.com',
//         password: '123abc',
//         gender: "f",
//         minAge: "24",
//         maxAge:"40",
//         weight: "50",
//         height: "155",
//         goalWeight: "48",
//       }),
//     )
//     .expect(400)
//     .end((err, res) => {
//       if (err) return done(err);
//       expect(res.body.message).toBe("\"name\" is required");
//       return done();
//     });
// });
// test('signup route, check if user exist, status 409, (user already exist)message ', (done) => {
//   return request(app)
//     .post('/api/v1/signup')
//     .set({
//       'Content-Type': 'application/json',
//     })
//     .send(
//       JSON.stringify({
//           username: "iman96",
//           email: 'nada@gmail.com',
//           password: '123abc',
//           name: "iman sedky",
//           gender: "f",
//           minAge: "24",
//           maxAge:"40",
//           weight: "50",
//           height: "155",
//           goalWeight: "48",
         
//       }),
//     )
//     .expect(409)
//     .end((err, res) => {
//       if (err) return done(err);
//       // expect(res.body.message).toBe('user already exists');
//       expect(res.statusCode).toBe(200);

//       return done();
//     });
// });


