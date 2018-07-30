const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const faker = require('faker');
const data = require('../dataGeneration.js');
const db = require('../db/database.js');

app.use('/aircnb/:id', express.static('public'));

// db.insertData();

app.get('/house/:id', (req, res) => {
  let data = req.params;
  let id = parseInt(data.id);
  db.findOne(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = app;

