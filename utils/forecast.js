const request = require('request')

// FORCAST
const forecast = (latitude, longitude, callback) => {
    
    // DARKSKY API
    const darkskyURL = 'https://api.darksky.net/forecast/9a06b0fc0575fe9a8a56720eb9d953f6/' + latitude + ',' + longitude;
    
    request({
        url: darkskyURL,
        json: true

    }, (error, {body}) => {
        if (error) {
            // Low-level error 
            console.log('Unable to connect to the weather service. ', undefined)

        } else if (body.error) {
            // Invalid location -- URL error
            console.log('Unable to find location. Please try again with a valid location. ', undefined)

        } else {
            console.log(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain. \n');

        }
    });
}

module.exports = forecast;
