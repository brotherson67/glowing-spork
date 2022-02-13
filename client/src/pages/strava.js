// https://www.strava.com/api/v3/athlete/activities?access_token=35b2879fd3a29d6bf20751a84121ff7be1ffea64

function getActivities() {

  const activitiesLink = "https://www.strava.com/api/v3/athlete/activities?access_token=35b2879fd3a29d6bf20751a84121ff7be1ffea64"
  
  fetch(activitiesLink)
    .then((res) => console.log(res.json()))
}

getActivities();