const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aircnb');
const data = require('../dataGeneration.js');
const db = mongoose.connection;

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

// houseSchema.plugin(autoIncrement.plugin, { model: 'House', field: 'id' });
const House = mongoose.model('House', houseSchema);

const insertData = () => {
	let allData = [];
	while (allData.length < 100) {
	  allData.push(data.makeData());
	}
	House.insertMany(allData, err => {
	  if (err) {
	    console.log(err);
	  }
	});
}

const findOne = id => House.findOne({ id });


module.exports.insertData = insertData;
module.exports.findOne = findOne;









