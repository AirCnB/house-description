const faker = require('faker');

const amenities = [{A: 'TV', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/TV+icon.jpeg'}, 
                   {A: 'Dryer', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/dryer+icon.png'},
                   {A: 'Fireplace', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/fireplace+icon.png'},
                   {A: 'Hair dryer', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/hairdryer+icon.jpeg'},
                   {A: 'Kitchen', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/kitchen+icon.jpeg'},
                   {A: 'Washer', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/washer+icon.jpeg'},
                   {A: 'Wifi', url: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/wifi+icon.png'}];

const homeType = ['ENTIRE GUEST SUITE', 'PRIVATE ROOM', 'ENTIRE HOUSE', 'APARTMENT', 'PRIVATE ROOM IN APARTMENT'];
const adj = ['Beautiful', 'Peaceful', 'Cozy', 'Serene', 'Amazing', 'Warm', 'Bright', 'Charming'];
const noun = ['home', 'apartment', 'room', 'house'];
const area = ['beach', 'ocean', 'sea', 'seaside', 'coast'];
const headers = ['Facilities', 'Dining', 'Guest access', 'Bed and bath', 'Safety features'];
const beds = ['double bed', 'single bed', 'queen bed', 'king bed', 'sofa bed'];

let count = 0;

const makeData = () => {
  let info = [];
  let basics = [];
  let modelAmenities = [];
  let rules = [];
  let sleep = [];

  while (basics.length < 5) {
    basics.push(faker.lorem.sentence(5));
  }

  while (info.length < (4 + Math.floor(Math.random() * 3))) {
  	let arr = [];
  	arr[0] = headers[Math.floor(Math.random() * 5)]
  	arr[1] = faker.lorem.sentence(5)
  	arr[2] = faker.lorem.sentence(5)
  	arr[3] = faker.lorem.sentence(5)
  	arr[4] = faker.lorem.sentence(5)
  	arr[5] = faker.lorem.sentence(5)
  	info.push(arr);
  }

  while (rules.length < 5) {
  	rules.push(faker.lorem.sentence(3));
  }

  while (modelAmenities.length < 5) {
  	modelAmenities.push(amenities[Math.floor(Math.random() * 7)])
  }
  
  while (sleep.length < 2) {
  	sleep.push(beds[Math.floor(Math.random() * 5)]);
  }

  let homeName = adj[Math.floor(Math.random() * 8)] + ' ' + noun[Math.floor(Math.random() * 4)] + ' by the ' + area[Math.floor(Math.random() * 5)];

  let model = {
    id: count++,
	  house_type: faker.random.arrayElement(homeType),
	  home_name: homeName,
	  city: faker.address.city(),
	  host: faker.name.firstName(),
	  guest_num: faker.random.number({min:1, max:8}),
	  bedroom_num: faker.random.number({min:1, max:3}),
	  bed_num: faker.random.number({min:1, max:3}),
	  bath_num: faker.random.number({min:1, max:3}),
	  license: faker.random.number({min:1000000, max:9000000}),
	  highlight1: faker.lorem.sentence(10),
	  highlight2: faker.lorem.sentence(10),
	  highlight3: faker.lorem.sentence(10),
	  image: faker.image.avatar(),
	  description: faker.lorem.paragraphs(15),
	// aHeaders: headers,
	  amenities: modelAmenities,
	  amenities_basics: basics,
    amenities_info: info,
	// a_facilities: info[1],
	// a_1: info[2],
	// a_2: info[3],
	// a_3: info[4],
	// a_4: info[5],
	  not_included: faker.lorem.words(5),
	  rules: rules,
	  rules2: faker.lorem.paragraphs(3),
	  sleep_arrangement: sleep
  }

  return model;
}

module.exports.makeData = makeData;


