import React, { useEffect, useState } from 'react';
import { FaCodeBranch, FaCodepen } from 'react-icons/fa';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import BikeBody from '../components/Bike/BikeBody';
// import axios from "axios";
// import './app.css';
import "../utils/strava";
// import polyline from '@mapbox/polyline'

function StravaActivities() {
  
  // const navigate = useNavigate();
  const client_id = '77814';
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [activityData, setActivityData] = useState([]);
  console.log(window.location.search)
  const client_secret = 'ba4cf64706994d406df016b09df6d62ee55edaef';
  const url = new URLSearchParams(window.location.search)
  // const term = url.get('term')
  var code = getParameterByName('code');
  console.log(code)
  // console.log(term)
  //loading
  useEffect(() => {
    console.log(typeof url);
    if(code) {
      //loading variable with spinner loading is true 
      getAccessToken(code).then(setLoading(false));
    } else {
      console.log('hi');
    }
  },[code])



  //use effect with dependency on data state on changing data then set loading to false and it will trigger 

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }


  function handleClick() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/profile&response_type=code&scope=activity:read_all`
  }
  const authLink = "https://www.strava.com/oauth/token?";
  
  // if (code) {
  function getAccessToken(code) {

    return fetch(authLink, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        client_id: '77814',
        client_secret: client_secret,
        code: code,
        grant_type: 'authorization_code'
      })

      
      //get response json it and pass it to activities
    })
    .then((res) => res.json())
    .then(res => getActivities(res));
    
    

  // add other function call to get user id
  // convertAuthToAccess();
  function getActivities(res) {
    
    console.log(res);
  //   // commented out path to get user profile info from an array
  //   // https://www.strava.com/api/v3/athlete?access_token=7bc114015e81808697585c211d65f269c319a3cc
    const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`

    fetch(activitiesLink)
      // .then((res) => console.log(res.json()))
      .then((res) => {
        return res.json();
      })
      .then(data => {
        console.log(data);
       
        // dataStrava = data;
        // var htmlContent = "";
        // for (let i = 0; i > 5; i++) {
        // document.getElementById('activity').innerHTML = data[0];
        document.getElementById('activity-name').textContent = 'Activity Name: ' + data[0].name;

        document.getElementById('activity-distance').innerHTML = 'Distance: ' + data[0].distance;

        document.getElementById('averageSpeed').innerHTML = 'Average Speed: ' + data[0].average_speed;

        document.getElementById('totalTime').innerHTML = 'Total Time: ' + data[0].elapsed_time;

        document.getElementById('elevationGain').innerHTML = 'Total Elevation Gain: ' + data[0].total_elevation_gain;
        return data;
      })
     
  }

 

  //refresh token
  //https://www.strava.com/oauth/token?client_id=77814&client_secret=ba4cf64706994d406df016b09df6d62ee55edaef&refresh_token=e3c3bce7513bb09b9c19bfd2450855830fb0d313&grant_type=refresh_token

  // const authLink = "https://www.strava.com/oauth/token";

  function reAuthorize() {
    fetch(authLink, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        client_id: '77814',
        client_secret: 'ba4cf64706994d406df016b09df6d62ee55edaef',
        refresh_token: 'e3c3bce7513bb09b9c19bfd2450855830fb0d313',
        grant_type: 'refresh_token'
      })
      //get response json it and pass it to activities
    }).then((res => res.json()))
      .then(res => getActivities(res))

  }

  reAuthorize();
  
  }
  return (
    <div className="app-activities">
      <div className="app-activities">
      <h1>Strava Activities</h1>
      <button>Strava Login</button>
      <div className="activity" id="activity"></div>
      <div className="activity" id="activity-name"></div>
      <div id="activity-distance"></div>
      <div id="averageSpeed"></div>
      <div id="totalTime"></div>
      <div id="elevationGain"></div>
      <div id="activity-map"></div>
    </div>
      <button onClick={handleClick}>Strava Login</button>
    
    </div>
      
    
  );


}

export default StravaActivities;
