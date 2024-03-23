import WorldWeatherBg from '../../assets/images/ny.jpg'
import BorderHeading from '../BorderHeading/BorderHeading';

function WorldWeather() {
    return (
        <div className="flex flex-col p-2 bg-slate-100/20 rounded-lg text-white h-full">
            <div className="thumb-weather flex flex-col relative min-h-[200px]">
                <img className='rounded-lg h-full object-cover' src={WorldWeatherBg} alt="world_weather" />
                <div className='flex absolute bg-black/70 items-center rounded-b-lg bottom-0 left-0 right-0 text-sm'>
                    <p className='md:p-4 p-1 grow '>Sunny</p>
                    <span className='md:p-2 p-2 text-xl'>76*</span>
                </div>
            </div>
            <div className='mt-2'>
                <BorderHeading content={"AROUND THE WORLD"} color={"#fff"} fontWeight={700} />
                <ul className="mt-2 pl-2 leading-8">
                    <li>
                        <i className="fa-solid fa-circle mr-4 text-[10px] text-center" />
                        New York
                    </li>
                    <li>
                        <i className="fa-solid fa-circle mr-4 text-[10px] text-center" />
                        Los Angeles
                    </li>
                    <li>
                        <i className="fa-solid fa-circle mr-4 text-[10px] text-center" />
                        Chicago
                    </li>
                    <li>
                        <i className="fa-solid fa-circle mr-4 text-[10px] text-center" />
                        Tokyo
                    </li>
                    <li>
                        <i className="fa-solid fa-circle mr-4 text-[10px] text-center" />
                        London
                    </li>
                    <li>
                        <i className="fa-solid fa-circle mr-4 text-[10px] text-center" />
                        Paris
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WorldWeather;