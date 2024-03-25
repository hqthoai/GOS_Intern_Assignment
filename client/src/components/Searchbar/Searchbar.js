import { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function Searchbar({ setCityName }) {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        setCityName(searchInput);
    }

    const handleSelect = async (address) => {
        setSearchInput(address);
        try {
            const results = await geocodeByAddress(address);
            setCityName(results[0].formatted_address);
        } catch (error) {
            console.error('Error', error);
        }
    };
    return (
        <div className="flex p-2 bg-slate-100/10 rounded-lg text-sm relative">
            <PlacesAutocomplete
                value={searchInput}
                onChange={setSearchInput}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="w-full rounded-sm h-full mr-2">
                        <input
                            {...getInputProps({
                                placeholder: 'Enter the city name or country',
                                className: 'w-full mr-2 px-3.5 py-2.5 rounded-md ',
                            })}
                        />

                        <div className="absolute top-full left-2 bg-white rounded-sm border-gray-300 shadow-md"
                            style={{ width: 'calc(100% - 16px)' }}>
                            {loading && <div className="px-3.5 py-2.5">Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = 'px-3.5 py-2.5 cursor-pointer hover:bg-gray-100';
                                return (
                                    <div
                                        key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                        })}
                                    >
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <button className="px-3.5 py-2.5 bg-orange-400 rounded-md text-white active:scale-95" onClick={handleSearch} >
                Search
            </button>
            {/* <input className="w-full mr-2 px-4 rounded-sm" type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter the city name" />
            <div className="px-3.5 py-2 bg-orange-400 rounded-sm text-white hover:cursor-pointer active:scale-95" onClick={handleSearch} >
                Search
            </div>
            {searchResults.length > 0 && (
                <div className="absolute top-full left-2 bg-white border rounded-sm border-gray-300 shadow-md max-h-48 overflow-y-auto "
                    style={{ width: 'calc(100% - 16px)' }}>
                    <ul >
                        {searchResults.map((result, index) => (
                            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    );
}

export default Searchbar;