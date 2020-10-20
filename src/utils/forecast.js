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
            console.log(body.current)
            callback(
                undefined,
                " Observation time: " + body.current.observation_time + "   " +
                body.current.weather_descriptions +
                " IT IS CURRENTLY " +
                body.current.temperature +
                "   DEGRESS OUT. There is a " +
                body.current.precip +
                "   % chance of rain. " +
                "   Wind speed is " + body.current.wind_speed +
                "   Wind_degree is " + body.current.wind_degree +
                "   Pressure: " + body.current.pressure +
                "   UV index: " + body.current.uv_index +
                "   Humidity: " + body.current.humidity + 
                "   Visibility: " + body.current.visibility    
            );
        }
    });
};

module.exports = forecast;
