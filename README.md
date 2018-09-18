# House-Description

![screenshot](house-description/assets/screenshot.png)

> This module allows users to view the information of a property site

Demo component @ http://ec2-18-217-43-240.us-east-2.compute.amazonaws.com/listings/0/description/

## Related Projects
  * https://github.com/AirCnB/reviews-module
  * https://github.com/AirCnB/photo-carousel
  * https://github.com/AirCnB/bookings-module
  
## Table of Contents
  1. [Usage](#Usage)
  1. [Development](#requirements)
  1. [Requirements](#development)
  
## Usage 

### Docker (recommended)
This module is containerized with Docker. To use with Docker:

  * docker-compose up -d
  
The component will be hosted on localhost:3002.

### Manually 

Otherwise, the module can also be started up manually with webpack and a running MongoDB:

  * npm install -g webpack

  * npm install

  * mongod

  * npm run generate

  * npm run seed

  * npm start

And the module will be hosted on localhost:3002.

## Development

  * npm run build to build with webpack.
  * npm test to run tests

## Requirements 


An nvmrc file is included if using nvm.

  * Node 6.13.0
  * Mongo




