const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aircnb');
const dataGen = require('../dataGeneration.js');
const db = mongoose.connection;
const fs = require('fs');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to database');
});

const houseSchema = mongoose.Schema({
  id: Number,
  house_type: String,
  home_name: String,
  city: String,
  host: String,
  guest_num: Number,
  bedroom_num: Number,
  bed_num: Number,
  bath_num: Number,
  license: Number,
  highlight1: String,
  highlight2: String,
  highlight3: String,
  image: String,
  description: String,
  // aHeaders: [String],
  amenities: [{
  	A: String,
  	url: String
  }],
  amenities_basics: [],
  amenities_info: [[String]],
  // a_facilities: [],
  // a_1: [],
  // a_2: [],
  // a_3: [],
  // a_4: [],
  not_included: [],
  rules: [],
  rules2: String,
  sleep_arrangement: []
})

const House = mongoose.model('House', houseSchema);


// const insertData = () => {
// 	let allData = [];
// 	while (allData.length < 100) {
// 	  allData.push(data.makeData());
// 	}
// 	House.insertMany(allData, err => {
// 	  if (err) {
// 	    console.log(err);
// 	  }
// 	});
// }

const insertData = (data) => {
  House.insertMany(data, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('inserted data');
    }
  });
}

const readTSV = () => {
  fs.readFile('./description.tsv', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      let allData = dataGen.insertTSV(data);
      insertData(allData);
    }
  })
}

const findOne = id => House.findOne({ id });

module.exports.readTSV = readTSV;
module.exports.findOne = findOne;










