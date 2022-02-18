import React from 'react';
import "./parkActivity";
import "./parks.css"
// import CitySearch from "./CitySearch";
import NearbyPlaces from "./ParkButtons/NearbyPlaces"
// import DirectionsLandMarks from "./ParkButtons/DirectionsLandMarks"
// import WeatherInfo from "./ParkButtons/WeatherInfo"

const Park = () => {
    return (
        <div>
            {/* <!-- Start of the places list/form --> */}
            <div id="activity-box" className="box">
                <nav className="panel white-space">
                    <p className="panel-heading">
                        Activities & Places Related to your search
                    </p>
                    {/* <CitySearch /> */}
                    {/* <p className="panel-tabs"> */}
                       <NearbyPlaces />
                        {/* <!-- <a>Favorites</a> --> */}
                        {/* <DirectionsLandMarks /> */}
                        {/* <WeatherInfo /> */}
                    {/* </p> */}

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