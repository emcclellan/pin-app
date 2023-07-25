import React, {useState} from "react";

function FilterBar(){
    const [search, setSearch] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    function handleSearchClick(){
        console.log(search);
    }

    return(
        <div className="searchBar">
            <form>
                <span>
                    <label>Pin Name: </label>
                    <input placeholder="Pin Name..." type="text" value={search} onChange={handleInputChange} /> 
                    <button onClick={handleSearchClick}>Search</button>
                </span>
            </form>
        </div>
    )
}

export default FilterBar;