const request = require('request');
const yargs = require('yargs');
const geocode = require('./utils/geocode.js');

// DARKSKY API
const darkskyURL = 'https://api.darksky.net/forecast/9a06b0fc0575fe9a8a56720eb9d953f6/37.8267,-122.4233';

// GEOCODING --- MAPBOX API
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGptYXJlbmciLCJhIjoiY2pzc2FtdXQ1MDEwMzN5dGxjdWpzem1sdSJ9.snBdNxYv3k0S3gzbvsF8BA';

// const argv = yargs
//   .options({

//     // ADDRESS
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }

// })
//   .help()
//   .alias('help', 'h')
//   .argv;

// console.log(argv);

// // FORCAST
// request({
//   url: darkskyURL,
//   json: true
// }, (error, response, body) => {
//   if (error) {
//     // Low-level error 
//     console.log('Unable to connect to the weather service. ')

//   } else if (response.body.error) {
//     // Invalid location -- URL error
//     console.log('Unable to find location. Please try again with a valid location. ')

//   } else {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain. \n');

//   }
// });

// // GEOCODING
// request({
//   url: geocodeURL,
//   json: true
// }, (error, response) => {
//   if (error) {
//     // Low-level error 
//     console.log('Unable to connect to location services. ')

//   } else if (response.body.features.length === 0) {
//     // Invalid location -- URL error
//     console.log('Unable to find location. Please try again with a valid location. ')

//   } else {
//     // Find and print latitude and longitude 
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }

// })

// FUNCTIONS ----------------------------------------------

// GEOCODING
// const geocode = (address, callback) => {
//   // GEOCODING --- MAPBOX API
//   const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGptYXJlbmciLCJhIjoiY2pzc2FtdXQ1MDEwMzN5dGxjdWpzem1sdSJ9.snBdNxYv3k0S3gzbvsF8BA';
  
//   request({
//     url: geocodeURL,
//     json: true

//   }, (error, response) => {
//     if (error) {
//       // Low-level error 
//       callback('Unable to connect to location services. ', undefined);

//     } else if (response.body.features.length === 0) {
//       // Invalid location -- URL error
//       callback('Unable to find location. Please try again with a valid location. ', undefined);
    
//     } else {
//       // Find and print latitude and longitude 
//       callback(undefined, {
//         latitude: response.body.features[0].center[0],
//         longitude: response.body.features[0].center[1],
//         locaiton: response.body.features[0].place_name
//       })
//     }
//   })

// }

geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode('Michigan', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})