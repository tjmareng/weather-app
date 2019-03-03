const request = require('request');
const yargs = require('yargs');

// DARKSKY API
const darkskyURL = 'https://api.darksky.net/forecast/9a06b0fc0575fe9a8a56720eb9d953f6/37.8267,-122.4233';

// GEOCODING --- MAPBOX API
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGptYXJlbmciLCJhIjoiY2pzc2FtdXQ1MDEwMzN5dGxjdWpzem1sdSJ9.snBdNxYv3k0S3gzbvsF8BA';

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

// FORCAST
request({
  url: darkskyURL,
  json: true
}, (error, response, body) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain. \n');
});

// GEOCODING
request({
  url: geocodeURL,
  json: true
}, (error, response) =>{
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  console.log(latitude, longitude);
})