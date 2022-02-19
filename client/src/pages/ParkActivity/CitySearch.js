import React from 'react';
import "./parkActivity";
import "./parks.css"

function CitySearch() {
    return (
        <div className="panel-block">
            <div>
                {/* <!-- <p className="control has-icons-left"> --> */}
                <div className="input-controlDiv">
                    <div className="input-divOuter">
                        <div className="input-divInner">
                            <input id="input-state" className="input" type="text" placeholder="Search using state acronym"></input>
                        </div>
                        <button id="search-city-btn" className="button is-primary has-background-info btn SearchCity-Button">Search</button>
                    </div>
                    
                    
                    <p className="btn">Click links added to each result for more info from the National Parks Website</p>
                </div>
            </div>
        </div>

    );
}

export default CitySearch;