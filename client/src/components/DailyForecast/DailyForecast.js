import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BorderHeading from "../BorderHeading/BorderHeading";
import DailyForecastCard from "./DailyForecastCard/DailyForecastCard";
import weatherServices from "../../services/WeatherServices";

function DailyForecast({ location }) {
    const [listWeather, setListWeather] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const settings = {
        arrows: false,
        className: "center",
        infinite: true,
        slidesToShow: isMobile ? 3 : 6,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: isMobile ? 3 : 6,
    };

    useEffect(() => {
        location && weatherServices.getDailyForecast(location.name, location.localtime.split(' ')[0])
            .then(data => setListWeather(data.forecast.forecastday[0].hour))
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

    return (
        <div className="p-2 bg-slate-100/10 rounded-lg text-white h-full">
            <div className="flex flex-col text-center justify-center h-full">
                <div className="mb-4">
                    <BorderHeading content={'FORECAST'} fontWeight={700} />
                </div>


                <div className="slider-container md:p-0 h-full flex flex-col justify-center ">
                    <Slider {...settings}>
                        {
                            listWeather.length > 0 && listWeather.map((item, index) => {
                                return (
                                    <DailyForecastCard key={index} item={item} />
                                )
                            })
                        }
                    </Slider>

                </div>
                {/* <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
                    {
                        listWeather.length > 0 && listWeather.map((item, index) => {
                            if (index < 12)
                                return (
                                    <DailyForecastCard key={index} item={item} />
                                )
                        })
                    }
                </div> */}
            </div>
        </div>
    );
}

export default DailyForecast;