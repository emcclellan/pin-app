

function FilterBar(){
    return(
        <div className="searchBar">
            <form>
                <span>
                    <label>Pin Name: </label>
                    <input placeholder="Pin Name..."/> 
                    <button>Search</button>
                </span>
            </form>
        </div>
    )
}

export default FilterBar;