import BorderHeading from "../BorderHeading/BorderHeading";
import cloudyRainy from '../../assets/images/cloudy_rainy.png'
function LocalReport() {
    return (
        <div className="p-2 bg-slate-100/20 rounded-lg text-white h-full" >
            <div className="flex flex-col text-center h-full">
                <BorderHeading content={"LOCAL WEATHER REPORT"} color={'#fff'} fontWeight={700} />
                <div className="flex flex-col justify-center h-full">
                    <div className='uppercase font-medium'>
                        Sunday, march 24, 2024
                    </div>
                    <div className="flex items-center text-sm mt-4" >
                        <img className="w-1/2" src={cloudyRainy} alt="sun" />
                        <div className="w-1/2 text-[16px] leading-relaxed">
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