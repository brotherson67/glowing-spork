import React from 'react';
import BikeBody from './BikeBody';
import coverImage from "../../assets/images/pexels-krivec-ales-554609.jpg";
import Hero from '../Hero';
import '../../utils/strava.js';


function Bike(data) {
    return (
        <div>
            <section>
            <Hero img={coverImage}/>
            </section>
            <BikeBody />
        </div>
    );
}

export default Bike;