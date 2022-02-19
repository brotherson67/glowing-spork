import React from 'react';
// import "../../pages/activity.css"
import { parkWeatherInfo } from "../../pages/ParkActivity/parkActivity.js";
// import "../../pages/ParkActivity/parks.css"
import Park from "../../pages/ParkActivity/Park"
// import SearchInputPanel from '../../pages/ParkActivity/ParkButtons/SearchInputPanel'
import NearbyPlaces from "../../pages/ParkActivity/ParkButtons/NearbyPlaces"
import DirectionsLandMarks from "../../pages/ParkActivity/ParkButtons/DirectionsLandMarks"
import WeatherInfo from "../../pages/ParkActivity/ParkButtons/WeatherInfo"

function SkiBody() {
  return (
    <div>
      <div className="container">
        <div className="Body-box">
          {/* <Park /> */}
          {/* <SearchInputPanel /> */}
          <div className="Body-boxOuter">

            <div className="Body-boxInner">
              <NearbyPlaces />
            </div>
          </div>
          <div className="Body-boxOuter">

            <div className="Body-boxInner">
              <DirectionsLandMarks />
            </div>
          </div>
          <div className="Body-boxOuter">

            <div className="Body-boxInner">
              <WeatherInfo />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
}

export default SkiBody;