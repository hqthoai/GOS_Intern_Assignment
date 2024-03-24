import { useState } from "react";

function Searchbar({ setCityName }) {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        setCityName(searchInput);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div className="flex p-2 bg-slate-100/10 rounded-lg text-sm">
            <input className="w-full mr-2 px-4 rounded-sm" type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter the city name" />
            <div className="float-left px-3.5 py-2 bg-orange-400 rounded-sm text-white hover:cursor-pointer active:scale-95" onClick={handleSearch} >
                Search
            </div>
        </div>
    );
}

export default Searchbar;