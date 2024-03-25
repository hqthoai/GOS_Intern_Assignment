import { useEffect, useState } from "react";
import weatherServices from "../../services/WeatherServices";
import WeeklyForecastCard from "./DayForecastCard/WeeklyForecastCard";

function WeeklyForecast({ location }) {
    const [listWeather, setListWeather] = useState([]);
    const [limit, setLimit] = useState(5);
    const [showLess, setShowLess] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        location && weatherServices.getNextDayForecast(location.name, 9)
            .then(data => setListWeather(data.forecast.forecastday))
            .catch(error => console.log(error))


        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 
        };

        handleResize(); // Kiểm tra kích thước màn hình lần đầu
        window.addEventListener("resize", handleResize); // Thêm sự kiện lắng nghe resize
        return () => {
            window.removeEventListener("resize", handleResize); // Xóa sự kiện lắng nghe khi component bị hủy
        };
    }, [location])
    const handleClick = () => {
        if (showLess)
            setLimit(5);
        else
            setLimit(9);
        setShowLess(!showLess);
    }
    return (
        <div className="p-2 bg-slate-100/10 rounded-lg text-white text-sm">
            <div className="flex justify-end items-center px-2 pb-6 hover:cursor-pointer" onClick={handleClick}>
                <div className="border-b-2 active:scale-95">
                    {!showLess ? 'Load more' : 'Show less'}
                    <i className="ml-1 fa-solid fa-angles-right text-sm"></i>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
                {
                    listWeather.length > 0 && listWeather.map((item, index) => {
                        if (index !== 0 && index < limit)
                            return (
                                <div key={index} className="flex items-center justify-center w-full mb-4">
                                    <WeeklyForecastCard item={item} />
                                    {index % (isMobile ? 2 : (4)) !== 0 && <div className={`bg-white w-[1px] h-full`}></div>}
                                </div>
                            )
                    })
                }
            </div>
        </div>
    );
}

export default WeeklyForecast;