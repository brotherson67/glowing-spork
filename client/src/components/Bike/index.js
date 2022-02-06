import React from 'react';
import BikeBody from './BikeBody';
import coverImage from "../../assets/images/pexels-krivec-ales-554609.jpg";
import Hero from '../Hero';

// var StravaApiV3 = require('strava-v3');
// var defaultClient = StravaApiV3.ApiClient.instance;

// // Configure OAuth2 access token for authorization: strava_oauth
// var strava_oauth = defaultClient.authentications['strava_oauth'];
// strava_oauth.accessToken = "955c5ea6a5b33c63bda77dc68e95bb4aae484dcf";

// var api = new StravaApiV3.ActivitiesApi()

// var id = 789; // {Long} The identifier of the activity.

// var opts = { 
//   'includeAllEfforts': true // {Boolean} To include all segments efforts.
// };

// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api.getActivityById(id, opts, callback);

function Bike() {
    return (
        <div>
            <section>
            <Hero img={coverImage}/>
            </section>
            <BikeBody />
        </div>
    );
}

export default Bike;