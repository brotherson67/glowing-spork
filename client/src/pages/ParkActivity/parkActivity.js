// Global Variables
// var to connect to input in search 
var inputSearchName = document.querySelector("#input-state");
var activitySearchBtn = document.querySelector("#activities-btn");
var directionsInfoBtn = document.querySelector('#directions-btn')
var weatherInfoBtn = document.querySelector('#weather-info-btn')
var searchCityBtn = document.querySelector("#search-city-btn");
var inputContainerEl = document.querySelector("#input-container");
var parks = [];
var weatherInfo = [];
var directionsInfo = [];
var directionsUrl = [];

// code using nps.gov API - use to get info from about places near the location desired 
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
const apiKeyNps = "4fxi1Pok4kgde26ywgQnyEaaxknpMlmKw3svW5lP";

function parkInfo() {
    // fetch a response from nps 
    fetch("https://developer.nps.gov/api/v1/parks?stateCode=" + inputSearchName.value + "&api_key=" + apiKeyNps + "&fields=description,fullName,url,activities,latitude,longitude,directionsInfo,addresses,weatherInfo,name,directionsUrl,operatingHours", requestOptions)
    .then(response => response.json())
    .then(result => { 
    //    console.log(result.data[0]);
        parks = result.data;
        // console.log(parks)
        var ulEl = document.createElement("ul");
        // do all the html stuff to display the parks
        for(var i = 0; i < parks.length; i++) {
            
            var liEl = document.createElement("li");
            var aEl = document.createElement('a');

            aEl.setAttribute('href',parks[i].url);
            aEl.innerText = parks[i].fullName;
            
            liEl.appendChild(aEl);
            ulEl.appendChild(liEl);
        }
        inputContainerEl.innerText = '';
        inputContainerEl.appendChild( ulEl);
    })
    .catch(error => console.log('error', error));

}

function parkDirectionsInfo() {
    fetch("https://developer.nps.gov/api/v1/parks?stateCode=" + inputSearchName.value + "&api_key=" + apiKeyNps + "&fields=description,fullName,url,activities,latitude,longitude,directionsInfo,addresses,weatherInfo,name,directionsUrl,operatingHours", requestOptions)
    .then(response => response.json())
    .then(result => { 
    //    console.log(result.data[0]);
        directionsInfo = result.data;
        var ulEl = document.createElement("ul");
        // do all the html stuff to display the parks
        for(var i = 0; i < directionsInfo.length; i++) {
            
            var liEl = document.createElement("li");
            var aEl = document.createElement('a');
            
            aEl.setAttribute('href',directionsInfo[i].directionsUrl);
            aEl.innerText = directionsInfo[i].directionsInfo;
            liEl.appendChild(aEl);
            ulEl.appendChild(liEl);
        }
        inputContainerEl.innerText = '';
        inputContainerEl.appendChild( ulEl);
    })
    .catch(error => console.log('error', error));


}




var formData = function() {
    inputSearchName.addEventListener('click', function(){
        console.log(inputSearchName);
    });
};
// var searchBtn = function() {
//     // reacts to click on the search button
searchCityBtn.addEventListener('click', function(){
        // alert("search button was clicked");
        parkInfo();
});

directionsInfoBtn.addEventListener('click', function(){
    parkDirectionsInfo();
})






