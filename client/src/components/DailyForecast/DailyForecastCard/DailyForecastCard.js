import cloudyDay from '../../../assets/images/cloudy-day_icon.png'

function DailyForecastCard({ time, temp }) {
    return (
        <div className="flex flex-col items-center border-white border-2 p-2 rounded-lg mb-2">
            <div>
                {time}
            </div>
            <div className='w-3/4' >
                <img src={cloudyDay} alt="cloudy-day" />
            </div>
            <div>
                {temp}
            </div>
        </div>
    );
}

export default DailyForecastCard;