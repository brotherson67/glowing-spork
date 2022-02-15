import React, { useEffect } from 'react';
// import './app.css';
import "../utils/strava";
// import polyline from '@mapbox/polyline'

function StravaActivities() {
  // const client_id = '77814';
  // const client_secret = 'ba4cf64706994d406df016b09df6d62ee55edaef';
  // const refresh_token = 'e3c3bce7513bb09b9c19bfd2450855830fb0d313';


  //   useEffect(() => {
  //   //  console.log('useEffect ran successfully')


  //   },
  //     []);
  return (
    <div className="app-activities">
      <h1>Strava Activities</h1>
      <div className="activity" id="activity"></div>
      <div className="activity" id="activity-name"></div>
      <div id="activity-distance"></div>
      <div id="averageSpeed"></div>
      <div id="totalTime"></div>
      <div id="elevationGain"></div>

      <div id="activity-map"></div>

    </div>
  );
}

export default StravaActivities;
