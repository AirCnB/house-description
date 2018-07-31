const faker = require('faker');
const fs = require('fs');

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
const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Ultrices sagittis orci a scelerisque. Lectus mauris ultrices eros in cursus turpis. Orci eu lobortis elementum nibh. Non nisi est sit amet facilisis. At auctor urna nunc id cursus metus. Tellus molestie nunc non blandit massa enim nec. Tellus rutrum tellus pellentesque eu tincidunt. Etiam erat velit scelerisque in dictum non consectetur a erat. Sem nulla pharetra diam sit amet. Vitae purus faucibus ornare suspendisse. Donec et odio pellentesque diam";
const paragraph2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea. Duis ultricies lacus sed turpis tincidunt. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est. Tristique et egestas quis ipsum suspendisse ultrices. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Fermentum iaculis eu non diam phasellus. Sed tempus urna et pharetra pharetra massa massa. Nunc mattis enim ut tellus elementum sagittis. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Urna nunc id cursus metus aliquam eleifend mi. Nunc non blandit massa enim nec dui nunc mattis. Risus viverra adipiscing at in tellus integer. Feugiat in ante metus dictum at tempor. In metus vulputate eu scelerisque. Ipsum dolor sit amet consecteturLacus sed turpis tincidunt id. Sed pulvinar proin gravida hendrerit lectus a. Nisl suscipit adipiscing bibendum est ultricies integer quis. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Pharetra vel turpis nunc eget lorem dolor sed. In fermentum posuere urna nec tincidunt praesent. Aliquet porttitor lacus luctus accumsan tortor. Lectus proin nibh nisl condimentum. Arcu bibendum at varius vel pharetra vel. Mattis nunc sed blandit libero volutpat sed cras. Nibh nisl condimentum id venenatis a. Lacinia at quis risus sed. Euismod elementum nisi quis eleifend quam adipiscing. Nam at lectus urna duis convallis convallis tellus id interdum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.Nunc congue nisi vitae suscipit tellus mauris a diam. Nisi lacus sed viverra tellus in hac habitasse platea. Ac tortor dignissim convallis aenean et tortor. Proin sed libero enim sed faucibus turpis. Tincidunt lobortis feugiat vivamus at augue. Feugiat nisl pretium fusce id velit ut tortor pretium. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Fames ac turpis egestas maecenas. Posuere ac ut consequat semper. Sit amet consectetur adipiscing elit ut aliquam purus sit. Nibh nisl condimentum id venenatis a condimentum vitae. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rutrum quisque non tellus orci ac auctor augue mauris. Ipsum faucibus vitae aliquet nec. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium.";
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
	  description: paragraph2,
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
	  rules2: paragraph1,
	  sleep_arrangement: sleep
  }

  return model;
}

const makeHeader = () => {
  let header = '';
  let obj = makeData();
  for (let key in obj) {
    if (key !== 'sleeping_arrangment') {
      header += key + '\t';
    } else {
      header += key;
    }
  }
  return header;
};

const makeRow = (obj) => {
  let row = '';
  for (let key in obj) {
    if (key !== 'sleeping_arrangment') {
      if (typeof obj[key] === 'string') {
        let str = obj[key].split('\n').join(' ');
        row += str + '\t';
      } else if (typeof obj[key] === 'object') {
        let arr = JSON.stringify(obj[key]);
        row += arr + '\t';
      } else {
        row += obj[key] + '\t';
      }
    } else {
      row += obj[key];
    }
  }
  return row;
};

const makeTSV = () => {
  let tsv = '';
  tsv += makeHeader() + '\n';
  for (let i = 0; i < 99; i++) {
    let obj = makeData();
    if (i === 99) {
      tsv += makeRow(obj); 
    }
      tsv += makeRow(obj) + '\n';
  }
  fs.writeFile('description.tsv', tsv, err => {
    if (err) {
      console.log(err);
    }
    console.log('file has been saved my dude');
  })
}

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

module.exports.makeTSV = makeTSV;
module.exports.insertTSV = insertTSV;





