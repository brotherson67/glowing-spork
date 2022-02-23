import React from "react";
import RunBody from "./RunBody";
import coverImage from "../../assets/images/IMG_1939.JPEG";
import Hero from "../Hero";
import NationalParks from "../../pages/ParkActivity/NationalParks";

function Run() {
  return (
    <div>
      <section>
        <Hero img={coverImage} />
        <p className="panel-heading">
          Activities & Places Related to your search
        </p>
      </section>

      <RunBody />
    </div>
  );
}

export default Run;
