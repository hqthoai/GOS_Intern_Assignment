import BorderHeading from "../BorderHeading/BorderHeading";
import DailyForecastCard from "./DailyForecastCard/DailyForecastCard";

const mockData = [
    {
        temp: '33°C',
        time: '8AM'
    },
    {
        temp: '34°C',
        time: '9AM'
    },
    {
        temp: '34°C',
        time: '10AM'
    },
    {
        temp: '31°C',
        time: '11AM'
    },
    {
        temp: '30°C',
        time: '12PM'
    },
    {
        temp: '29°C',
        time: '1PM'
    },
    {
        temp: '27°C',
        time: '2PM'
    },
    {
        temp: '30°C',
        time: '3PM'
    },
    {
        temp: '29°C',
        time: '4PM'
    },
    {
        temp: '28°C',
        time: '5PM'
    },
    {
        temp: '27°C',
        time: '6PM'
    },
    {
        temp: '26°C',
        time: '7PM'
    },
]

function DailyForecast() {
    return (
        <div className="p-2 bg-slate-100/20 rounded-lg text-white h-full">
            <div className="flex flex-col text-center">
                <div className="mb-4">
                    <BorderHeading content={'FORECAST'} fontWeight={700} />
                </div>

                <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
                    {
                        mockData.map((item, index) => {
                            return (
                                <DailyForecastCard key={index} time={item.time} temp={item.temp} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DailyForecast;