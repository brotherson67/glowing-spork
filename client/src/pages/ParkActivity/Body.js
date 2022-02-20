import React from 'react';
// import "./Parks"
import "./NationalParks"


function Body() {
    return (
        <div id="activity-box" className="box">
            <nav className="panel white-space">
                <p className="panel-heading">
                    Activities & Places Related to your search
                </p>
                
                
                <p className="panel-tabs">
                    <a id="nearby-places-btn" className="is-active button btn">Nearby Places, Images & Description</a>
                    <a id="directions-btn" className="button btn">Directions & Landmarks</a>
                    <a id="weather-info-btn" className="button btn">Weather Info</a>
                </p>

                


            </nav >
        </div >
    )
}

export default Body;