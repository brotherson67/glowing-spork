import React from 'react';
import NationalParks from '../../pages/ParkActivity/NationalParks';




function BikeBody() {
  return (
    <div>
      <div className="container">
        <div className="Body-box">
          {/* <Park /> */}
          {/* <SearchInputPanel /> */}
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
          <NationalParks />
        </div>


      </div>

    </div>
  
    
    
  );
}

export default BikeBody;