const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/database.js');

app.use('/listings/:id/description', express.static('public'));

app.get('/api/house/:id', (req, res) => {
  let data = req.params;
  let id = parseInt(data.id);
  db.findOne(id)
    .then( result => res.status(200).send(result))
    .catch( err => res.status(404).send(error))
});

module.exports = app;


