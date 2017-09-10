process.env.NODE_ENV = 'test';
const supertest = require('supertest');
const chai = require('chai');

const app = require('../../app');

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
global.assert = chai.assert;
