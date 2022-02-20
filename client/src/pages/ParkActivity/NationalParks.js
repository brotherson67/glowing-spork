
import React, { useState, useEffect } from 'react';

// var to connect to input in search 
import Body from './Body'



function NationalParks(props) {
    var directionsInfoBtn = document.querySelector('#directions-btn')
    var weatherInfoBtn = document.querySelector('#weather-info-btn')
    var searchCityBtn = document.querySelector("#search-city-btn");
    var inputContainerEl = document.querySelector("#input-container");
    const [inputSearchName, setInputSearchName] = useState("");
    // var inputSearchName = document.querySelector("#input-state");
    console.log(inputSearchName)
    // code using nps.gov API - use to get info from about places near the location desired 
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const apiKeyNps = "4fxi1Pok4kgde26ywgQnyEaaxknpMlmKw3svW5lP";
    var [parksResults, setParks] = useState([]);
    // var [weatherInfo, setWeatherInfo] = useState([]);
    // var [directionsInfo, setDirectionsInfo] = useState([]);
    // var [directionsUrl, setDirectionsUrl] = useState([]);


    // fetch a response from nps 
    let queryURL = fetch("https://developer.nps.gov/api/v1/parks?stateCode=" + inputSearchName + "&api_key=" + apiKeyNps + "&fields=description,fullName,url,activities,latitude,longitude,directionsInfo,addresses,weatherInfo,name,directionsUrl,operatingHours", requestOptions)
    // console.log(queryURL)

    var activitySearchBtn = document.querySelector("#activities-btn");
    // function handleClick(activitySearchBtn) {

    function getOptionsInfo(res) {
        queryURL
            .then((res) => {
                return res.json();
            })
            .then(result => {
                console.log(result);

                setParks(result.data)
                // console.log(setParks)
            })
        // .catch(error => console.log('error', error));

    }


    function handleClick(e) {
        e.preventDefault();
        // parksResults = result.data;
        console.log('The link was clicked.');
        getOptionsInfo(parksResults)
        console.log(parksResults)
    }

    // function ListActivity(props) {
    //     const parks = props.parks;
    //     const parkList = <div id="input-container" className="panel-block">

    //     </div>
    // }



    return (
        <div>
            <div className="app-activities">
                <div className="app-activities">
                    <div className="panel-block">
                        <form className="control">
                            <input
                                id="input-state"
                                value={inputSearchName}
                                className="input"
                                type="text"
                                placeholder="Search using state acronym"
                                onChange={(e) => setInputSearchName(e.target.value)}

                            >

                            </input>
                            <button id="search-city-btn" className="button" onClick={handleClick}>Search</button>
                            <p className="btn">Click links added to each result for more info from the National Parks Website</p>
                        </form>

                    </div>
                    <Body />
        <div id="input-container" className="panel-block">
            <div>
                Nearby Parks:
                <ul>
                {parksResults.map((parks) => {
                    return (
                        <>
                            <li key={parks.id}>{parks.name}</li>
                            <li key={parks.description}>{parks.description}</li>
                            <li key={parks.weatherInfo}>☀️Weather{parks.weatherInfo}☀️</li>

                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>







                    </div>


                </div>
            </div>

            {/* 
        <button onClick={() => setParks()}>Search</button> */}

        </div>
    )
}

export default NationalParks;