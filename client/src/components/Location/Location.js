function Location() {
    return (
        <div className="flex justify-between p-2 bg-slate-100/20 rounded-lg text-white">
            <div className="flex flex-col">
                <p className="text-xl font-bold">Name of city</p>
                <p>Country</p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="rounded-3xl bg-black/40 w-full px-4 py-2">
                    <i className="fa-solid fa-location-dot mr-2" />
                    Change Location
                </div>
            </div>
        </div>
    );
}

export default Location;