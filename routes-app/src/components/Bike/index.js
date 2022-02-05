import React from 'react';
import BikeBody from './BikeBody';
import coverImage from "../../assets/images/hike.jpg";

function Bike() {
    return (
        <div>
            <section>
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </section>
            <BikeBody></BikeBody>
        </div>
    );
}

export default Bike;