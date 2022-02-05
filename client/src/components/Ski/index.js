import React from 'react';
import SkiBody from './SkiBody';
import coverImage from "../../assets/images/IMG_1.jpg";
import Hero from '../Hero';

function Ski() {
    return (
        <div>
            <section>
                <Hero img={coverImage}/>
            </section>
            <SkiBody/>
        </div>
    );
}

export default Ski;