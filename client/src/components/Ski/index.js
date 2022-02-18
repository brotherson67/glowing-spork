import React from 'react';
import SkiBody from './SkiBody';
import coverImage from "../../assets/images/IMG_1.jpg";
import Hero from '../Hero';
import StravaActivities from '../Strava';

function Ski() {
    return (
        <div>
            <section>
                <Hero img={coverImage}/>
            </section>
            <SkiBody/>
            <StravaActivities />
        </div>
    );
}

export default Ski;