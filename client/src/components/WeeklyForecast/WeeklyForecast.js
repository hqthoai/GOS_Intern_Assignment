import { useEffect, useState } from "react";
import weatherServices from "../../services/WeatherServices";
import WeeklyForecastCard from "./DayForecastCard/WeeklyForecastCard";

function WeeklyForecast({ location }) {
    const [listWeather, setListWeather] = useState([]);

    useEffect(() => {
        weatherServices.getNextDayForecast(location.name, 9)
            .then(data => setListWeather(data.forecast.forecastday))
            .catch(error => console.log(error))
    }, [location])

    return (
        <div className="p-2 bg-slate-100/20 rounded-lg text-white">
            <div className="flex justify-end items-center px-2 pb-6 hover:cursor-pointer text-[16px]">
                <div className="border-b-2 active:scale-95">
                    Load more
                    <i className="ml-1 fa-solid fa-angles-right text-sm"></i>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {
                    listWeather.length > 0 && listWeather.map((item, index) => {
                        if (index !== 0 && index < 5)
                            return (
                                <WeeklyForecastCard key={index} item={item} />
                            )
                    })
                }
            </div>
        </div>
    );
}

export default WeeklyForecast;