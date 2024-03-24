import { useState } from 'react';
import WorldWeatherBg from '../../assets/images/ny.jpg'
import BorderHeading from '../BorderHeading/BorderHeading';
import ny from '../../assets/images/ny.jpg';
import rome from '../../assets/images/rome.jpg';
import barcelona from '../../assets/images/barcelona.jpg';
import amsterdam from '../../assets/images/amsterdam.jpg';
import berlin from '../../assets/images/berlin.jpg';
import milan from '../../assets/images/milan.jpg';
import tokyo from '../../assets/images/tokyo.jpg';
import seoul from '../../assets/images/seoul.jpg';
import london from '../../assets/images/london.jpg';
import athens from '../../assets/images/athens.jpg';

const cityList = [
    {
        name: "New York",
        thumb: ny
    },
    {
        name: "Rome",
        thumb: rome
    },
    {
        name: "Barcelona",
        thumb: barcelona
    },
    {
        name: "Amsterdam",
        thumb: amsterdam
    },
    {
        name: "Berlin",
        thumb: berlin
    },
    {
        name: "Milan",
        thumb: milan
    },
    {
        name: "Tokyo",
        thumb: tokyo
    },
    {
        name: "Seoul",
        thumb: seoul
    },
    {
        name: "London",
        thumb: london
    },
    {
        name: "Athens",
        thumb: athens
    },

]
function WorldWeather({ weather, setCityName }) {
    const [thumb, setThumb] = useState(WorldWeatherBg);

    const handleClick = (item) => {
        setCityName(item.name)
        setThumb(item.thumb)
    }

    return (
        <div className="flex flex-col p-2 bg-slate-100/10 rounded-lg text-white h-full">
            <div className="thumb-weather flex flex-col relative min-h-[200px]">
                <img className='rounded-lg h-full object-cover' src={thumb} alt="world_weather" />
                <div className='flex absolute bg-black/70 items-center rounded-b-lg bottom-0 left-0 right-0 text-sm'>
                    <p className='md:p-2 p-1 grow '>{weather?.condition?.text}</p>
                    <span className='md:p-2 p-2 text-xl'>{weather?.temp_c}°C</span>
                </div>
            </div>
            <div className='mt-4'>
                <BorderHeading content={"AROUND THE WORLD"} color={"#fff"} fontWeight={700} />
                <ul className="mt-2 pl-2 leading-8 text-sm">
                    {
                        cityList.map(item => (
                            <li key={item.name} onClick={() => handleClick(item)} className='hover:cursor-pointer hover:text-orange-400 '>
                                <i className="fa-solid fa-circle mr-4 text-[6px] text-center" />
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default WorldWeather;