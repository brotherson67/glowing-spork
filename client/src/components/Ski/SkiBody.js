import React from 'react';
import "../../pages/activity.css"
import "../../pages/ParkActivity/parkActivity";
import "../../pages/ParkActivity/parks.css"
import NearbyPlaces from "../../pages/ParkActivity/ParkButtons/NearbyPlaces"
import DirectionsLandMarks from "../../pages/ParkActivity/ParkButtons/DirectionsLandMarks"
import WeatherInfo from "../../pages/ParkActivity/ParkButtons/WeatherInfo"

function SkiBody() {
  return (
    <div className="container">
    <div className="Body-box">
      <div className="Body-boxOuter">
        <NearbyPlaces />
        <div className="Body-boxInner">div 1 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>
      </div>
      <div className="Body-boxOuter">
        <DirectionsLandMarks />
        <div className="Body-boxInner">div 1 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>
      </div>
      <div className="Body-boxOuter">
        <WeatherInfo />
        <div className="Body-boxInner">div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>
      </div>
    </div>


  </div>
    
  );
}

export default SkiBody;