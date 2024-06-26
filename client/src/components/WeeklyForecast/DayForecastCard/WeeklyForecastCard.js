
function WeeklyForecastCard({ item }) {

    return (
        <div className='flex flex-col text-center justify-center items-center md:text-sm w-full'>
            <div className='mb-2 text-ellipsis '>
                {item.date}
            </div>
            <div className='flex justify-center mb-2 w-full'>
                <img className="" src={item.day.condition.icon} alt={item.day.condition.name} />
            </div>
            <div className='mb-2'>
                Wind: {(item.day.maxwind_kph).toFixed(1)}km/h
            </div>
            <div className='mb-2'>
                {item.day.mintemp_c} ~ {item.day.maxtemp_c}°C
            </div>
            <div className='mb-2'>
                Humidity: {(item.day.avghumidity).toFixed(1)}%
            </div>
        </div>
    );
}

export default WeeklyForecastCard;