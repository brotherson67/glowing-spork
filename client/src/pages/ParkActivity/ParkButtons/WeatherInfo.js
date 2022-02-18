import React from 'react';
import "../parks.css"

function WeatherInfo(){
    return(
        <div>
            <a id="weather-info-btn" className="button btn">Weather Info</a>
            <div id="input-container" className="panel-block"></div>
        </div>
    )
}

export default WeatherInfo;