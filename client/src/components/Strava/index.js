import React, { useEffect, useState } from 'react';
import { FaCodeBranch, FaCodepen } from 'react-icons/fa';
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import BikeBody from '../components/Bike/BikeBody';
import MapBox from './map';
// import axios from "axios";
import './strava.css';
// import "../utils/strava";
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
    if (code) {
      //loading variable with spinner loading is true 
      getAccessToken(code).then(setLoading(false));
    } else {
      console.log('hi');
    }
  }, [code])



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
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/strava&response_type=code&scope=activity:read_all`
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
          function dataLoop(){
          for (let i = 0; i < data.length; i++) {
            var cardDiv = document.getElementById('mainActivityCard');
            cardDiv.classList.add("mainActivityCard");

            var card = document.createElement('div');
            card.classList.add("activity-name");
            card.innerHTML = 'Activity Name: ' + data[i].name;


            var card2 = document.createElement('div');
            card2.classList.add("activity-distance");
            card2.innerHTML = 'Distance: ' + data[i].distance;


            var card3 = document.createElement('div');
            card3.classList.add("averageSpeed");
            card3.innerHTML = 'Average Speed: ' + data[i].average_speed;


            var card4 = document.createElement('div');
            card4.classList.add("totalTime");
            card4.innerHTML = 'Total Time: ' + data[i].elapsed_time;


            var card5 = document.createElement('div');
            card5.classList.add("elevationGain");
            card5.innerHTML = 'Total Elevation Gain: ' + data[i].total_elevation_gain;


            var card6 = document.createElement('div');
            card6.classList.add("activity-map");
            card6.innerHTML = 'Map PolyLine: ' + data[i].map.summary_polyline;

            cardDiv.appendChild(card);
            cardDiv.appendChild(card2);
            cardDiv.appendChild(card3);
            cardDiv.appendChild(card4);
            cardDiv.appendChild(card5);
            cardDiv.appendChild(card6);
            
          }
        }
          return dataLoop(data);
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
      <div id="mainActivityCard" className="app-activities">

        <h1 className="activity-title">Strava Activities</h1>
      
        
        </div>
        <div className="activity-loginBtn">
          <button class="button-stravaLogin" onClick={handleClick}>Strava Login</button>
        </div>
        <div className="map-divOuter">
          <div className="map-divInner">
          <MapBox className="map-component" />
          </div>
        </div>
      
    </div>
    // </div >


  );


}

export default StravaActivities;