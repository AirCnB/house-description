const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const faker = require('faker');
const data = require('../dataGeneration.js');
const db = require('../db/database.js');


// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));

// db.insertData();

app.listen(3002, () => console.log('Listening on port 3002!'))