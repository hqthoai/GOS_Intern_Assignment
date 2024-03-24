
function DailyForecastCard({ item }) {
    return (
        <div className="flex flex-col items-center justify-center border-white border-[1px] p-2 rounded-lg mb-2">
            {item.time.split(' ')[1]}
            <img src={item.condition.icon} alt="cloudy-day" className="w-3/4" />
            {item.temp_c}°C
        </div>
    );
}

export default DailyForecastCard;