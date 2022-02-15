// import polyline from '@mapbox/polyline';


function getActivities(res) {
    // commented out path to get user profile info from an array
// https://www.strava.com/api/v3/athlete?access_token=7bc114015e81808697585c211d65f269c319a3cc
    const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`

    fetch(activitiesLink)
        //   .then((res) => console.log(res.json()))
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
            // const polylines = [];
            // for (let i = 0; i < data.length; i++) {
            //     const activity_polyline = data[i].map.summary_polyline;
            //     // const activity_name = data[i].name;
            //     // const activity_elevation = data[i].total_elevation_gain;

            //     polylines.push({ activityPositions: polyline.decode(activity_polyline)});
            // }

            // document.getElementById('activity-map').innerHTML = 'Total Time: ' + polylines;
            // }
            // var htmlContent = "";
            // for (let i = 1; i < data.length; i++) {
            //     htmlContent += `
            //     <div className="activity" id="activity-name">${data[i].name}</div>

            //     `
            // }
            // document.getElementById('activity').textContent = htmlContent;


        })
}

//   getActivities();

//refresh token
//https://www.strava.com/oauth/token?client_id=77814&client_secret=ba4cf64706994d406df016b09df6d62ee55edaef&refresh_token=e3c3bce7513bb09b9c19bfd2450855830fb0d313&grant_type=refresh_token

const authLink = "https://www.strava.com/oauth/token";

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