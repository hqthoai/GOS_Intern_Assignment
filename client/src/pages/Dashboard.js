import WorldWeather from "../components/WorldWeather/WorldWeather";
import background from '../assets/images/bg.jpg'
import Searchbar from "../components/Searchbar/Searchbar";
import Location from "../components/Location/Location";
import LocalReport from "../components/LocalReport/LocalReport";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import WeeklyForecast from "../components/WeeklyForecast/WeeklyForecast";

function Dashboard() {
    return (
        <div className='bg-cover bg-center object-cover min-h-[100vh]' style={{ backgroundImage: `url(${background})` }}>
            <div className='backdrop-blur-sm lg:p-16 md:p-10 p-2 pt-4 grid grid-cols-12 lg:gap-6 md:gap-4 gap-2 bg-cover bg-center' >
                <div className="left-side lg:col-span-2 md:col-span-3 md:flex hidden">
                    <WorldWeather />
                </div>
                <div className="right-side lg:col-span-10 md:col-span-9 col-span-12">
                    <div className="grid grid-row gap-4">
                        <Searchbar />
                        <Location />
                        <div className="grid grid-cols-3 md:gap-4 gap-2">
                            <div className="col-span-1">
                                <LocalReport />
                            </div>
                            <div className="col-span-2">
                                <DailyForecast />
                            </div>
                        </div>
                        <WeeklyForecast />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;