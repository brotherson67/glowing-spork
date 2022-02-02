import React from 'react';
import SkiBody from './SkiBody';
import coverImage from "../../assets/images/IMG_1.jpg";

function Ski() {
    return (
        <div>
            <section>
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </section>
            <SkiBody></SkiBody>
        </div>
    );
}

export default Ski;