const request = require('request');

// GEOCODING
const geocode = (address, callback) => {
    // GEOCODING --- MAPBOX API
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGptYXJlbmciLCJhIjoiY2pzc2FtdXQ1MDEwMzN5dGxjdWpzem1sdSJ9.snBdNxYv3k0S3gzbvsF8BA&limit=1';
    
    request({
      url: geocodeURL,
      json: true
  
    }, (error, {body}) => {
      if (error) {
        // Low-level error 
        callback('Unable to connect to location services. ', undefined);
  
      } else if (body.features.length === 0) {
        // Invalid location -- URL error
        callback('Unable to find location. Please try again with a valid location. ', undefined);
      
      } else {
        // Find and print latitude and longitude 
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          locaiton: body.features[0].center
        })
      }
    })
  
  }

  module.exports = geocode;