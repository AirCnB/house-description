const db = require('../db/database.js');
const fs = require('fs');


const makeDocument = (header, row) => {
  let obj = {};
  row = row.split('\t');
  header = header.split('\t');
  for (let i = 0; i < header.length; i++) {
    if (row[i][0] === '[') {
      obj[header[i]] = JSON.parse(row[i]);
    } else if (parseInt(row[i]).toString() !== 'NaN') {
      obj[header[i]] = parseInt(row[i]);
    } else {
      obj[header[i]] = row[i];
    }
  }
  return obj;
};

const insertTSV = (data) => {
  let allData = [];
  data = data.split('\n');
  let headers = data[0];
  for (let i = 1; i < 100; i++) {
    allData.push(makeDocument(headers, data[i]));
  }
  return allData;
}

const insertData = (data) => {
  db.House.insertMany(data)
    .then( () => {
      console.log('database seeded')
      db.connection.close(() => {
        console.log('database connection closed')
      });
    });
};

const readTSV = () => {
  fs.readFile('./data_generation/description.tsv', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let allData = insertTSV(data);
      insertData(allData);
    }
  })
}

readTSV();

