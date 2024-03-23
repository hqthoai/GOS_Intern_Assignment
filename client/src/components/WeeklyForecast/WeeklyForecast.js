import WeeklyForecastCard from "./DayForecastCard/WeeklyForecastCard";

const mockData = [
    {
        date: '24/03/2024',
        temp: '24 ~ 33°C',
        wind: '11km/h',
        humidity: '45%'
    },
    {
        date: '25/03/2024',
        temp: '24 ~ 33°C',
        wind: '11km/h',
        humidity: '45%'
    },
    {
        date: '26/03/2024',
        temp: '24 ~ 33°C',
        wind: '11km/h',
        humidity: '45%'
    },
    {
        date: '27/03/2024',
        temp: '24 ~ 33°C',
        wind: '11km/h',
        humidity: '45%'
    },
]

function WeeklyForecast() {
    return (
        <div className="p-2 bg-slate-100/20 rounded-lg text-white">
            <div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {
                    mockData.map((item, index) => {
                        return (
                            <WeeklyForecastCard key={index} date={item.date} wind={item.wind} temp={item.temp} humidity={item.humidity} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WeeklyForecast;