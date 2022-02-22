import React from 'react';
// import "../../pages/activity.css"
import NationalParks from '../../pages/ParkActivity/NationalParks';

function SkiBody() {
  return (
    <div>
      <div className="container">
        <div className="Body-box">
          {/* <Park /> */}
          <NationalParks />
          {/* <div className="Body-boxOuter">

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
          </div> */}
          
        </div>


      </div>

    </div>
  );
}

export default SkiBody;