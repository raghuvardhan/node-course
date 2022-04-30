const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const location = process.argv[2];

if(location === undefined)
{
    console.log("Please provide a location");
}
else {
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return console.log(error);
        } 
        console.log(location);
        forecast( latitude, longitude, (error, data) => {
            if(error){
                return console.log('Error', error);
            }
            console.log('Data', data)
          });
    }
    );
}
