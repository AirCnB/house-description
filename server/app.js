const express = require('express');
const app = express();
const db = require('../db/database.js');

app.use('/listings/:id/description', express.static('public'));

app.get('/api/house/:id', (req, res) => {
  let data = req.params;
  let id = parseInt(data.id);
  db.findOne(id)
    .then( result => res.status(200).send(result))
    .catch( err => res.status(404).send(err))
});

module.exports = app;


