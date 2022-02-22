import React from 'react';
import "../../pages/activity.css"
import NationalParks from '../../pages/ParkActivity/NationalParks';

function RunBody() {
  return (
    <div className="container">
      <div className="Body-box">
        {/* <div className="Body-boxOuter">
          <div className="Body-boxInner">div 1 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>
        </div>
        <div className="Body-boxOuter">
          <div className="Body-boxInner">div 1 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>
        </div>
        <div className="Body-boxOuter">
          <div className="Body-boxInner">div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>
        </div> */}
        <NationalParks />
      </div>


    </div>

  );
}

export default RunBody;