import React from 'react';
import "./parkActivity";
import "./parks.css"

function CitySearch() {
    return (
        <div className="panel-block">
            {/* <!-- <p className="control has-icons-left"> --> */}
            <div className="control">
                <input id="input-state" className="input" type="text" placeholder="Search using state acronym"></input>
                <button id="search-city-btn" className="button is-primary has-background-info btn">Search</button>
                {/* <p className="btn">Click links added to each result for more info from the National Parks Website</p> */}
            </div>

        </div>

    );
}

export default CitySearch;