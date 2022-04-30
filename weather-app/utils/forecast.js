const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6e96718727c5b963ddb731dd4efce676&query='+encodeURIComponent(latitude) +','+encodeURIComponent(longitude);

    request({ url, json: true }, (error, {body}) => {
        if (error) {
           callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions + '\n' + 'It is currently ' + body.current.temperature + ' degrees out.\n' + 'There is a ' + body.current.precip + '% chance of rain.');
        }
    });
};

module.exports = forecast;