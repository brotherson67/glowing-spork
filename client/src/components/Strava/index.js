
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { FaCodeBranch, FaCodepen } from 'react-icons/fa';
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { index } from '../../../../server/models/Reaction';
import MapBox from './map';
// import '../../../src/App.css';
import './strava.css';
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
                    setActivityData(data);
                    console.log(data);

                    // dataStrava = data;
                    // var htmlContent = "";
                    // for (let i = 0; i < 5; i++) {
                    //     console.log(data[i].map.summary_polyline);
                    //     var cardDiv = document.getElementById('mainActivityCard');

                    //     var card = document.createElement('div');
                    //     card.innerHTML = 'Activity Name: ' + data[i].name;;
                    //     var card2 = document.createElement('div');
                    //     card2.innerHTML = 'Distance: ' + data[i].distance;
                    //     var card3 = document.createElement('div');
                    //     card3.innerHTML = 'Average Speed: ' + data[i].average_speed;
                    //     var card4 = document.createElement('div');
                    //     card4.innerHTML = 'Total Time: ' + data[i].elapsed_time;
                    //     var card5 = document.createElement('div');
                    //     card5.innerHTML = 'Total Elevation Gain: ' + data[i].total_elevation_gain;
                        
                    //     cardDiv.appendChild(card);
                    //     cardDiv.appendChild(card2);
                    //     cardDiv.appendChild(card3);
                    //     cardDiv.appendChild(card4);
                    //     cardDiv.appendChild(card5);

                    // }
                    // return data;
                })

        }
        //refresh token
        //https://www.strava.com/oauth/token?client_id=77814&client_secret=ba4cf64706994d406df016b09df6d62ee55edaef&refresh_token=e3c3bce7513bb09b9c19bfd2450855830fb0d313&grant_type=refresh_token

        // const authLink = "https://www.strava.com/oauth/token";
    }
    // return (
    //     <div className="app-activities">
    //         <div className="app-activities">
    //             <button id="strava-btn" onClick={handleClick}>Strava Login</button>
    //             <h1>Strava Activities</h1>
    //             <MapBox />
    //             <div id="mainActivityCard">
    //                 <div className="activity" id="activity-name"></div>
    //                 <div id="strava-activity" className="strava-activity"></div>
    //                 <div id="activity-distance" className="activity-distance"></div>
    //                 <div id="averageSpeed" className="averageSpeed"></div>
    //                 <div id="totalTime" className="totalTime"></div>
    //                 <div id="elevationGain" className="elevationGain"></div>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
      <div className="app-activities">
        <div className="app-activities">
          <div className="activity-box" id="activity">
          <h1 className="activity-title">Strava Stats</h1>
          {activityData.map((data, index) => {
                return (
                    <>
                    <div className="activity-name" id="activity-name">{data.name}</div>
                    <div className="activity-distance" id="activity-distance">Distance: {data.distance}</div>
                    <div className="averageSpeed" id="averageSpeed">Average Speed: {data.average_speed}</div>
                    <div className="totalTime" id="totalTime">Elapsed time: {data.elapsed_time}</div>
                    <div className="elevationGain" id="elevationGain">Elevation gain: {data.total_elevation_gain}</div>
                    <div className="activity-map" id="activity-map">
                    </div>
                    <MapBox polyline={data.map.summary_polyline}/>
                    </>
                )




          })}
            {/* <div className="activity-name" id="activity-name"></div>
            <div className="activity-distance" id="activity-distance"></div>
            <div className="averageSpeed" id="averageSpeed"></div>
            <div className="totalTime" id="totalTime"></div>
            <div className="elevationGain" id="elevationGain"></div>
            <div className="activity-map" id="activity-map">
            </div>
            <MapBox /> */}
        <button class="button-stravaLogin" onClick={handleClick}>Strava Login</button>
        </div>
        </div>
      </div>
    );
}

export default StravaActivities;