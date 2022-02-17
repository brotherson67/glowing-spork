import React from 'react';
import StravaActivities from '../../pages/strava';




function BikeBody(...props) {
  console.log(StravaActivities);
  return (
    <div className="container">
      <StravaActivities />
        <div>
          <h2>Activity name: {props.name}</h2>
          <h2>distance: {props.distance}</h2>
          <h2>Elevation Gain:{props.total_elevation_gain}</h2>
        </div>
        <div>div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>

    </div>
    
  );
}

export default BikeBody;