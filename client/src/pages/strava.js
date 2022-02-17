import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import axios from "axios";
// import './app.css';
import "../utils/strava";
// import polyline from '@mapbox/polyline'

function StravaActivities() {


  const navigate = useNavigate();
  const client_id = '77814';
  const params = useParams();
  console.log(window.location.search)
  const client_secret = 'ba4cf64706994d406df016b09df6d62ee55edaef';
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
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/profile&response_type=code&scope=activity:read_all
        `
  }
  const authLink = "https://www.strava.com/oauth/token?";
  useEffect((authLink) => {

  
  if (code) {
  function getAccessToken(data) {
    fetch(authLink, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        client_id: '77814',
        client_secret: client_secret,
        code: 'code',
        grant_type: 'authorization_code'
      })
      //get response json it and pass it to activities
    })
    .then((res) => console.log(res.json()))
    // .then(res => handleClick)

  
console.log(getAccessToken)
  getAccessToken();
  // add other function call to get user id
  // convertAuthToAccess();
  function getActivities(res) {
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
        // var htmlContent = "";
        // for (let i = 0; i > 5; i++) {
        // document.getElementById('activity').innerHTML = data[0];
        document.getElementById('activity-name').textContent = 'Activity Name: ' + data[0].name;

        document.getElementById('activity-distance').innerHTML = 'Distance: ' + data[0].distance;

        document.getElementById('averageSpeed').innerHTML = 'Average Speed: ' + data[0].average_speed;

        document.getElementById('totalTime').innerHTML = 'Total Time: ' + data[0].elapsed_time;

        document.getElementById('elevationGain').innerHTML = 'Total Elevation Gain: ' + data[0].total_elevation_gain;

      })
  }

    getActivities();

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
  

 


  // function 

  return (
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
  );
}

export default StravaActivities;
