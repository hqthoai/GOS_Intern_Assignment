function Searchbar() {
    return (
        <div className="flex p-2 bg-slate-100/20 rounded-lg">
            <input className="w-full mr-2 px-2" type="search" id="gsearch" name="gsearch" />
            <div className="float-left px-3.5 py-2 bg-orange-400 text-white">
                Search
            </div>
        </div>
    );
}

export default Searchbar;