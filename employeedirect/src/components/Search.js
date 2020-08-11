import React from "react";
import "./comp.css"

function Search ({handleSearchChange}) {
    return (
        <div className="form">
            <input type="search" class="form-control" id="inputBox" placeholder="Search" onChange={e => handleSearchChange(e)}></input>
        </div>
    )
}

export default Search;