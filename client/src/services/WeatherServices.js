const API_URL = `${process.env.REACT_APP_API_URL}/weathers`;

const weatherServices = {
    getCurrentWeather: async (location) => {
        const normLocation = location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        try {
            const response = await fetch(API_URL + `/current?q=${normLocation}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    },

    getDailyForecast: async (location, date) => {
        const normLocation = location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const dt = date
        try {
            const response = await fetch(API_URL + `/daily?q=${normLocation}&dt=${dt}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    },

    getNextDayForecast: async (location, days) => {
        const normLocation = location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        try {
            const response = await fetch(API_URL + `/next-day?q=${normLocation}&days=${days}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default weatherServices;