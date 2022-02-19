import React from 'react';

const Park = () => {
    return (
        <div>
            {/* <!-- Start of the places list/form --> */}
            <div id="activity-box" className="box" style={{ display: 'flex', alignContent: 'center' }}>
                <nav className="panel white-space" style={{ display: 'flex', alignContent: 'center' }}>
                    <p className="panel-heading">
                        Activities & Places Related to your search
                    </p>
                    <div className="panel-block">
                        {/* <!-- <p className="control has-icons-left"> --> */}
                        <div className="control">
                            {/* <input id="input-state" className="input" type="text" placeholder="Search using state acronym"></input> */}
                            {/* <button id="search-city-btn" className="button is-primary has-background-info btn">Search</button> */}
                            {/* <p className="btn">Click links added to each result for more info from the National Parks Website</p> */}
                        </div>

                    </div>
                    <p className="panel-tabs">
                        {/* <button className="is-active button btn">
                            <a id="nearby-places-btn" className="is-active button btn">Nearby Places, Images & Description</a>
                        </button> */}

                        {/* <!-- <a>Favorites</a> --> */}
                        {/* <button>
                            <a id="directions-btn" className="button btn">Directions & Landmarks</a>
                        </button> */}
                        {/* <button>
                            <a id="weather-info-btn" className="button btn">Weather Info</a>
                        </button> */}

                    </p>

                    <div id="input-container" className="panel-block">

                    </div>

                    {/* <!-- <div className="panel-block">
        <button className="button is-link is-outlined is-fullwidth">
          refresh
        </button> --> */}
                    {/* </div> */}
                </nav>
            </div>
        </div>
    );
};

export default Park;