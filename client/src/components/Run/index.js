import React from 'react';
import RunBody from './RunBody';
import coverImage from "../../assets/images/IMG_1939.JPEG";
import Hero from '../Hero';
import StravaActivities from '../Strava';

function Run() {
    return (
        <div>
            <section>
            <Hero img={coverImage}/>
            </section>
            <RunBody/>
            <StravaActivities />
        </div>
    );
}

export default Run;