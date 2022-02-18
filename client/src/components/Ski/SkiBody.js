import React from 'react';
// import "../../pages/activity.css"
import {parkWeatherInfo } from "../../pages/ParkActivity/parkActivity.js";
// import "../../pages/ParkActivity/parks.css"
import Park from "../../pages/ParkActivity/Park"
// import NearbyPlaces from "../../pages/ParkActivity/ParkButtons/NearbyPlaces"
// import DirectionsLandMarks from "../../pages/ParkActivity/ParkButtons/DirectionsLandMarks"
import WeatherInfo from "../../pages/ParkActivity/ParkButtons/WeatherInfo"

function SkiBody() {
  return (
    <div className="container">
    <div className="Body-box">
      <Park />
       <div className="Body-boxOuter">
        {/* <NearbyPlaces /> */}
        <div className="Body-boxInner"><a id="nearby-places-btn" className="is-active button btn">Nearby Places, Images & Description</a></div>
      </div>
      <div className="Body-boxOuter">
        {/* <DirectionsLandMarks /> */}
         <div className="Body-boxInner"><a id="directions-btn" className="button btn">Directions & Landmarks</a></div>
      </div>
      <div className="Body-boxOuter">
        <WeatherInfo />
        <div className="Body-boxInner">
        <a id="weather-info-btn" className="button btn">Weather Info</a>
        </div>
      </div>
      <div id="input-container" className="panel-block"></div>
    </div>


  // </div>
    
  );
}

export default SkiBody;