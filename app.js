const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    
    // ADDRESS
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  
})
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);

request({
  url: '',
  json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].locations[0].street}`)
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`)
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`)
});