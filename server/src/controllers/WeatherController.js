require('dotenv').config();

const WEATHER_API_URL = 'https://api.weatherapi.com/v1'
const API_KEY = '8187afadbcad46a4bd763306242403';
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
        const date = req.query.dt // format 'yyyy-MM-dd'
        try {
            const weatherFetch = await fetch(`${WEATHER_API_URL}/history.json?key=${API_KEY}&q=${location}&dt=${date}&aqi=no`);
            const weatherData = await weatherFetch.json();
            res.send(weatherData)
        } catch (error) {
            console.log(error);
        }
    },

    getWeatherNextDay: async (req, res) => {
        const location = req.query.q
        const numDay = req.query.days;
        try {
            const weatherFetch = await fetch(`${WEATHER_API_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${numDay}&aqi=no`);
            const weatherData = await weatherFetch.json();
            res.send(weatherData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = WeatherController;