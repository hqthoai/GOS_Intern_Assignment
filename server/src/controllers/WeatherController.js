require('dotenv').config();

const WEATHER_API_URL = 'https://api.weatherapi.com/v1'
const API_KEY = process.env.WEATHER_API_KEY;
const WeatherController = {
    getCurrentWeather: async (req, res) => {
        const location = req.query.q
        try {
            const weatherFetch = await fetch(`${WEATHER_API_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`);
            const weatherData = await weatherFetch.json();
            res.send(weatherData)
        } catch (error) {
            console.log(error);
        }
    },

    getDailyWeather: async (req, res) => {
        const location = req.query.q
        try {
            const weatherFetch = await fetch(`${WEATHER_API_URL}/history.json?key=${API_KEY}&q=${location}&aqi=no`);
            const weatherData = await weatherFetch.json();
            res.send(weatherData)
        } catch (error) {
            console.log(error);
        }
    },

    getWeatherNextDay: async (req, res) => {
        const location = req.query.q
        const numDay = 7;
        try {
            const weatherFetch = await fetch(`${WEATHER_API_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${numDay}`);
            const weatherData = await weatherFetch.json();
            res.send(weatherData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = WeatherController;