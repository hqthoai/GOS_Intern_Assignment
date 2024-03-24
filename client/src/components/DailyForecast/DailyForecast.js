import { useEffect, useState } from "react";
import BorderHeading from "../BorderHeading/BorderHeading";
import DailyForecastCard from "./DailyForecastCard/DailyForecastCard";
import weatherServices from "../../services/WeatherServices";

function DailyForecast({ location }) {
    const [listWeather, setListWeather] = useState([]);

    useEffect(() => {
        location && weatherServices.getDailyForecast(location.name, location.localtime.split(' ')[0])
            .then(data => setListWeather(data.forecast.forecastday[0].hour))
            .catch(error => console.log(error))
    }, [location])

    return (
        <div className="p-2 bg-slate-100/10 rounded-lg text-white h-full">
            <div className="flex flex-col text-center">
                <div className="mb-4">
                    <BorderHeading content={'FORECAST'} fontWeight={700} />
                </div>

                <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
                    {
                        listWeather.length > 0 && listWeather.map((item, index) => {
                            if (index < 12)
                                return (
                                    <DailyForecastCard key={index} item={item} />
                                )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DailyForecast;