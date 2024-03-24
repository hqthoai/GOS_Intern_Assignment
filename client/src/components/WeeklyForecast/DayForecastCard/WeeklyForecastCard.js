import cloudy from '../../../assets/images/cloudy.png'

function WeeklyForecastCard({ date, wind, temp, humidity }) {
    return (
        <div className='flex flex-col text-center justify-center items-center md:text-[16px] text-sm'>
            <div className='mb-2 text-ellipsis '>
                {date}
            </div>
            <div className='mb-2 w-1/2'>
                <img src={cloudy} alt="cloudy" />
            </div>
            <div className='mb-2'>
                Wind: {wind}
            </div>
            <div className='mb-2'>
                {temp}
            </div>
            <div className='mb-2'>
                Humidity: {humidity}
            </div>
        </div>
    );
}

export default WeeklyForecastCard;