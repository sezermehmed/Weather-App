const request = require("request");
const app = require("../app");

const forecast = (latitude, longitude, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=e481647c593730d07e56033490e25af2&query=" +
        latitude +
        "," +
        longitude 
        "&units=m";
    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(
                undefined,
                body.current.weather_descriptions +
                " It is currently " +
                body.current.temperature +
                " degress out. There is a " +
                body.current.precip +
                "% chance of rain."
            );
        }
    });
};

module.exports = forecast;
//const url ='http://api.weatherstack.com/current?access_key=e481647c593730d07e56033490e25af2&query=' + app.address +'&units=m&limit=1';