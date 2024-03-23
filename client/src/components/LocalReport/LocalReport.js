import BorderHeading from "../BorderHeading/BorderHeading";
import cloudyRainy from '../../assets/images/cloudy_rainy.png'
function LocalReport() {
    return (
        <div className="p-2 bg-slate-100/20 rounded-lg text-white">
            <div className="flex flex-col text-center">
                <BorderHeading content={"LOCAL WEATHER REPORT"} color={'#fff'} fontWeight={700} />
                <div className="flex flex-col justify-between">
                    <div className='uppercase font-medium'>
                        Sunday, march 24, 2024
                    </div>
                    <div className="flex items-center text-sm">
                        <img className="w-1/2" src={cloudyRainy} alt="sun" />
                        <div className="w-1/2 ">
                            <div>
                                Temp: 33°C
                            </div>
                            <div>
                                Wind: 11km/h
                            </div>
                            <div>
                                Humidity: 67%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocalReport;