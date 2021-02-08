/* eslint-disable jest/no-done-callback */
const supertest = require('supertest');
const router = require('../../app');
const build = require('../../database/config/build');
const connection = require('../../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());
