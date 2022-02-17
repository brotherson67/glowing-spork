import React from 'react';
import StravaActivities from '../../pages/strava';




function BikeBody( {name, distance, total_elevation_gain }) {
  console.log(name);
  return (
    <div className="container">
        <div>
          <h2>Activity name: {name}</h2>
          <h2>distance: {distance}</h2>
          <h2>Elevation Gain:{total_elevation_gain}</h2>
        </div>
        <div>div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>

    </div>
    
  );
}

export default BikeBody;