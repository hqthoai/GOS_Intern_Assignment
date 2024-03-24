import { useEffect, useState } from "react";
import weatherServices from "../../services/WeatherServices";
import WeeklyForecastCard from "./DayForecastCard/WeeklyForecastCard";

function WeeklyForecast({ location }) {
    const [listWeather, setListWeather] = useState([]);
    const [limit, setLimit] = useState(5);
    useEffect(() => {
        weatherServices.getNextDayForecast(location.name, 9)
            .then(data => setListWeather(data.forecast.forecastday))
            .catch(error => console.log(error))
    }, [location])

    return (
        <div className="p-2 bg-slate-100/10 rounded-lg text-white text-sm">
            <div className="flex justify-end items-center px-2 pb-6 hover:cursor-pointer" onClick={() => setLimit(9)}>
                <div className="border-b-2 active:scale-95">
                    Load more
                    <i className="ml-1 fa-solid fa-angles-right text-sm"></i>
                </div>
            </div>
            <div className="grid grid-cols-4 md:gap-4 gap-2">
                {
                    listWeather.length > 0 && listWeather.map((item, index) => {
                        if (index !== 0 && index < limit)
                            return (
                                <div key={index} className="flex items-center justify-around">
                                    <WeeklyForecastCard item={item} />
                                    {<div className={`bg-white w-[1px] h-full`}></div>}
                                </div>
                            )
                    })
                }
            </div>
        </div>
    );
}

export default WeeklyForecast;