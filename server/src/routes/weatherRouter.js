const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/WeatherController');

router.get('/current', weatherController.getCurrentWeather);
router.get('/daily', weatherController.getDailyWeather);
router.get('/next-day', weatherController.getWeatherNextDay);
router.post('/confirm', weatherController.confirmCode)
router.post('/subscribe', weatherController.subscribeNewsletter)

module.exports = router;