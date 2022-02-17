import React from 'react';
import StravaActivities from '../../pages/strava';




function BikeBody(props) {
  console.log(props.data);
  return (
    <div className="container">
        <div>
          <h1>{props.dataStrava}</h1>
          <h2>Activity name: </h2>
          {/* <h2>distance: {distance}</h2>
          <h2>Elevation Gain:{total_elevation_gain}</h2> */}
        </div>
        <div>div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>

    </div>
    
  );
}

export default BikeBody;