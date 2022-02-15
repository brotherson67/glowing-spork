import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import './app.css';
import "../utils/strava";
// import polyline from '@mapbox/polyline'

function StravaActivities() {
  const navigate = useNavigate();
  const client_id = '77814';
  const params = useParams();
  console.log(window.location.search)
  // const client_secret = 'ba4cf64706994d406df016b09df6d62ee55edaef';
  // const refresh_token = 'e3c3bce7513bb09b9c19bfd2450855830fb0d313';
  useEffect(() => {
    console.log(params)
    if(code){
      // add other function call to get user id
    }
    
  },
    [])

  const url = new URLSearchParams(window.location.search)
  // const term = url.get('term')
  console.log(url)
  // console.log(term)
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  var code = getParameterByName('code');
  console.log(code)
  function handleClick() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/social&response_type=code&scope=activity:read_all
      `
  }
  // function 

  return (
    <div className="app-activities">
      <h1>Strava Activities</h1>
      <button onClick={handleClick}>Strava Login</button>
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
