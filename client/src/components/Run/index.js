import React from 'react';
import RunBody from './RunBody';
import coverImage from "../../assets/images/IMG_1939.JPEG";
import Hero from '../Hero';
import NationalParks from '../../pages/ParkActivity/NationalParks';
// import CitySearch from "../../pages/ParkActivity/CitySearch"

function Run() {
    return (
        <div>
            <section>
                <Hero img={coverImage} />
                <p className="panel-heading">
                    Activities & Places Related to your search
                    {/* <CitySearch /> */}
                </p>
            </section>

            <RunBody />

            {/* <div>
                <div>
                    <div id="input-container" className="panel-block"></div>
                    {/* <Park /> */}
                    {/* <StravaActivities /> */}
                {/* </div> */}

            {/* </div> */} 
        </div>
    );
}

export default Run;