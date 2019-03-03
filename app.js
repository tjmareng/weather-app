const request = require('request');
const yargs = require('yargs');

const url = 'https://api.darksky.net/forecast/KEY';
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

request({
  url: url
}, (error, response, body) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
});