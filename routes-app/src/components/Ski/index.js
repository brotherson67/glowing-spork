import React from 'react';
import coverImage from "../../assets/images/IMG_1.jpg";

function Ski() {
  return (
    <section>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
    
  );
}

export default Ski;