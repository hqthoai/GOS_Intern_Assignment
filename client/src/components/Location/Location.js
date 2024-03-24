import getCityFromCoordinates from "../../utils/GetCityName";
import GetCurrentLocation from "../../utils/GetCurrentLocation";

function Location({ location, setCityName }) {
    const handleUseCurrentLocation = () => {
        GetCurrentLocation()
            .then(async (currentPosition) => {
                // get name city from coordinates because the 
                // coordinates of weatherapi difference with gg map so the weather not correct.
                const cityName = await getCityFromCoordinates(currentPosition.lat, currentPosition.lon)
                setCityName(cityName);
            })
            .catch((error) => {
                console.log("Error occurred while retrieving location:", error);
            });
    }
    return (
        <div className="flex justify-between p-2 bg-slate-100/20 rounded-lg text-white">
            <div className="flex flex-col">
                <p className="text-xl font-bold">{location && location.name}</p>
                <p>{location && location.country}</p>
            </div>
            <div className="flex flex-col justify-center hover:cursor-pointer active:scale-95" onClick={handleUseCurrentLocation}>
                <div className="rounded-3xl bg-black/40 w-full px-4 py-2">
                    <i className="fa-solid fa-location-dot mr-2" />
                    Use Your Location
                </div>
            </div>
        </div>
    );
}

export default Location;