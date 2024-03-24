import BorderHeading from "../BorderHeading/BorderHeading";
import cloudyRainy from '../../assets/images/cloudy_rainy.png'
function LocalReport({ weather }) {
    return (
        <div className="p-2 bg-slate-100/10 rounded-lg text-white h-full text-sm" >
            <div className="flex flex-col text-center h-full">
                <BorderHeading content={"LOCAL WEATHER REPORT"} color={'#fff'} fontWeight={700} />
                <div className="flex flex-col justify-center items-center h-full">
                    <div className='uppercase font-medium lg:text-2xl'>
                        {weather.location && weather.location.localtime.split(' ')[0]}
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center text-center text-sm mt-4 w-full" >
                        <img className="md:w-1/2 mr-1" src={weather?.current?.condition?.icon} alt="sun" width={'80%'} />
                        <div className="md:w-1/2 leading-7">
                            <div>
                                Temp: {weather.current && weather.current.feelslike_c}°C
                            </div>
                            <div>
                                Wind: {weather.current && weather.current.wind_kph}km/h
                            </div>
                            <div>
                                Humidity: {weather.current && weather.current.humidity}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocalReport;