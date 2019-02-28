const request = require('request');

var options = {
    url: 'https://maps.googleapis.com/maps/api/geocode/json?' +
    'ADDRESS' +
    '&key=INSERT-KEY',
    json: true
  };
  
request({
    options
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});