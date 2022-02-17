import React from 'react';
import StravaActivities from '../../pages/strava';


function BikeBody(activityData) {
  console.log(activityData.name, activityData.distance, activityData.total_elevation_gain);
  return (
    <div className="container">
      <StravaActivities />
        <div>
          <h2>Activity name: {activityData.name}</h2>
          <h2>distance: {activityData.distance}</h2>
          <h2>Elevation Gain:{activityData.total_elevation_gain}</h2>
        </div>
        <div>div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>

    </div>
    
  );
}

export default BikeBody;