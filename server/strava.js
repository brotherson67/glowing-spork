function getActivities(res) {

    const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    
    fetch(activitiesLink)
      .then((res) => console.log(res.json()))
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
                client_secret: process.env.CLIENT_SECRET,
                refresh_token: process.env.REFRESH_TOKEN,
                grant_type: 'refresh_token'
            })
            //get response json it and pass it to activities
        }).then((res => res.json()))
            .then(res => getActivities(res))
  }

  reAuthorize();