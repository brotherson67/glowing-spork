import React from 'react';
import "../parks.css"

function WeatherInfo(){
    var weatherInfoBtn = document.querySelector('#weather-info-btn')
    var inputContainerEl = document.querySelector("#input-container");
    var requestOptions = {
             method: 'GET',
             redirect: 'follow'
           };
         const apiKeyNps = "4fxi1Pok4kgde26ywgQnyEaaxknpMlmKw3svW5lP";
         var inputSearchName = document.querySelector("#input-state");
         var weatherInfo = [];
    function parkWeatherInfo() {
        fetch("https://developer.nps.gov/api/v1/parks?stateCode=" + inputSearchName + "&api_key=" + apiKeyNps + "&fields=description,fullName,url,activities,latitude,longitude,directionsInfo,addresses,weatherInfo,name,directionsUrl,operatingHours", requestOptions)
        .then(response => response.json())
        .then(result => { 
        //    console.log(result.data[0]);
            weatherInfo = result.data;
            var ulEl = document.createElement("ul");
            // do all the html creation to display the parks weatherInfo
            for(var i = 0; i < weatherInfo.length; i++) {
                
                var liEl = document.createElement("li");
                var aEl = document.createElement('a');
                aEl.setAttribute('href', weatherInfo[i].url);
                aEl.innerText =  weatherInfo[i].weatherInfo;
                liEl.appendChild(aEl);
                ulEl.appendChild(liEl);
            }
            inputContainerEl.innerText = '';
            inputContainerEl.appendChild( ulEl);
        })
        .catch(error => console.log('error', error));
    
    
    
    }

    // weatherInfoBtn.addEventListener('click', function(){
    //     // console.log(parkWeatherInfo());
        
    // })
    // parkWeatherInfo(weatherInfoBtn);
    return(
        <div>
            <a id="weather-info-btn" className="button btn" onClick={parkWeatherInfo(
                
            )}>Weather Info</a>
            <div id="input-container" className="panel-block"></div>
        </div>
    )
}

export default WeatherInfo;