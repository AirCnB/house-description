const mongoose = require('mongoose');
mongoose.connect('mongodb://database/aircnb');
const connection = mongoose.connection;
const fs = require('fs');

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
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
  amenities: [{
  	A: String,
  	url: String
  }],
  amenities_basics: [],
  amenities_info: [[String]],
  not_included: [],
  rules: [],
  rules2: String,
  sleep_arrangement: []
})

const House = mongoose.model('House', houseSchema);

const findOne = id => House.findOne({ id });

module.exports.findOne = findOne;
module.exports.House = House;
module.exports.connection = connection;
