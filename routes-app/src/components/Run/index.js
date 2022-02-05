import React from 'react';
import RunBody from './RunBody';
import coverImage from "../../assets/images/IMG_1939.JPEG";

function Run() {
    return (
        <div>
            <section>
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </section>
            <RunBody></RunBody>
        </div>
    );
}

export default Run;