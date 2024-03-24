import { useEffect, useState } from "react";
import WorldWeather from "../components/WorldWeather/WorldWeather";
import background from '../assets/images/bg.jpg'
import Searchbar from "../components/Searchbar/Searchbar";
import Location from "../components/Location/Location";
import LocalReport from "../components/LocalReport/LocalReport";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import WeeklyForecast from "../components/WeeklyForecast/WeeklyForecast";
import GetCurrentLocation from "../utils/GetCurrentLocation";
import weatherServices from '../services/WeatherServices';
import getCityFromCoordinates from "../utils/GetCityName";
function Dashboard() {
    const [currentCityName, setCurrentCityName] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        GetCurrentLocation()
            .then(async (currentPosition) => {
                // get name city from coordinates because the 
                // coordinates of weatherapi difference with gg map so the weather not correct.
                const cityName = await getCityFromCoordinates(currentPosition.lat, currentPosition.lon)
                setCurrentCityName(cityName);
                weatherServices.getCurrentWeather(cityName)
                    .then(data => setCurrentWeather(data))
                    .catch((error) => {
                        console.log("Error occurred while retrieving location:", error);
                    })
            })
            .catch((error) => {
                console.log("Error occurred while retrieving location:", error);
            });

    }, [])

    useEffect(() => {
        currentCityName && weatherServices.getCurrentWeather(currentCityName)
            .then(data => {
                if (!data.error)
                    setCurrentWeather(data)
            })
            .catch((error) => {
                console.log("Error occurred while retrieving location:", error);
            })
    }, [currentCityName])

    return (
        <div className='bg-cover bg-center object-cover min-h-[100vh] ' style={{ backgroundImage: `url(${background})` }}>
            <div className='backdrop-blur-sm lg:p-16 md:p-10 p-2 pt-4 grid grid-cols-12 lg:gap-6 md:gap-4 gap-2 bg-cover bg-center' >
                <div className="left-side lg:col-span-2 md:col-span-3 md:flex hidden">
                    <WorldWeather weather={currentWeather?.current} setCityName={setCurrentCityName} />
                </div>
                {
                    currentWeather !== null &&
                    <div className="right-side lg:col-span-10 md:col-span-9 col-span-12">
                        <div className="grid grid-row gap-4">
                            <Searchbar setCityName={setCurrentCityName} />
                            <Location location={currentWeather.location} setCityName={setCurrentCityName} />
                            <div className="grid grid-cols-3 md:gap-4 gap-2">
                                <div className="col-span-1">
                                    <LocalReport weather={currentWeather} />
                                </div>
                                <div className="col-span-2">
                                    <DailyForecast location={currentWeather.location} />
                                </div>
                            </div>
                            <WeeklyForecast location={currentWeather.location} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Dashboard;