import React from 'react';
import SkiBody from './SkiBody';
import coverImage from "../../assets/images/IMG_1.jpg";
import Hero from '../Hero';
import StravaActivities from '../Strava';
import Park from '../../pages/ParkActivity/Park'

function Ski() {
    return (
        <div>
            <section>
                <Hero img={coverImage}/>
            </section>
            <SkiBody/>
            <StravaActivities />
            <div>
                <Park />
            </div>
        </div>
    );
}

export default Ski;