var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "799353ed9afe750d153971040ae573463c632316"

var api = new StravaApiV3.ActivitiesApi()

var name = name_example; // {String} The name of the activity.

var type = type_example; // {String} Type of activity. For example - Run, Ride etc.

var startDateLocal = 2013-10-20T19:20:30+01:00; // {Date} ISO 8601 formatted date time.

var elapsedTime = 56; // {Integer} In seconds.

var opts = { 
  'description': description_example, // {String} Description of the activity.
  'distance': 3.4, // {Float} In meters.
  'trainer': 56, // {Integer} Set to 1 to mark as a trainer activity.
  'commute': 56, // {Integer} Set to 1 to mark as commute.
  'hideFromHome': true // {Boolean} Set to true to mute activity.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createActivity(name, type, startDateLocal, elapsedTime, opts, callback);