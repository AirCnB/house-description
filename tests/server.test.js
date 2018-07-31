const request = require('supertest');
const express = require('express');
const app = require('../server/app.js')


test('should respond to GET method with status code 200', () => {
  return request(app).get('/house/1').then( response => {
    expect(response.statusCode).toBe(200);
  });
});

test('should respond with json object', () => {
  return request(app).get('/house/1').then( response => {
    expect(response.type).toBe('application/json')
  });
});

test('pull correct object id from database', () => {
  return request(app).get('/house/1').then( response => {
    expect(response.body.id).toEqual(1);
  });
});