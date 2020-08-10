import React from "react";

function Search ({handleSearchChange}) {
    return (
        <div className="form">
            <input type="search" onChange={e => handleSearchChange(e)}></input>
        </div>
    )
}

export default Search;