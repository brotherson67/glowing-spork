import React from 'react';
import HikeBody from './HikeBody';
import coverImage from "../../assets/images/IMG_1939.JPEG";

function Hike() {
    return (
        <div>
            <section>
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </section>
            <HikeBody></HikeBody>
        </div>
    );
}

export default Hike;