import React, {useState} from "react";
import { Pins } from '../Interface/Pin'; 
import data from '../Data/PinRepo.json';

function FilterBar(){
    let dataList : Pins = data;
    const [search, setSearch] = useState('');

    function handleSearch(){
        const results = dataList.filter((pin) => {
            return (
                search && 
                pin && 
                pin.name && 
                pin.name.toLowerCase().includes(search)
            );
        });
        console.log('here?');
        console.log(...results);
    }

    return(
        <div className="searchBar">
            <form>
                <span>
                    <label>Pin Name: </label>
                    <input placeholder="Pin Name..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> 
                    <button onClick={handleSearch}>Search</button>
                </span>
            </form>
        </div>
    )
}

export default FilterBar;