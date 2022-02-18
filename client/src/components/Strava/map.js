import React from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';

//encodePath() and decodePath in the google.maps.geometry.encoding

const containerStyle = {
  width: '400px',
  height: '400px',
  marginRight: '300px',
  padding: '40px'
};

const center = {
  lat: 40.733608,
  lng: -111.837646
};

function MapBox() {
    const onLoad = polyline => {
        console.log('polyline: ', polyline)
      };

      const decodePolyline = require('decode-google-map-polyline');
      var polyline = 'cukwFbmziTPTh@?VAHWFgBOk@AsATwEe@g@gQOwHLkEKESyV\\uRI}@PoP_@}MVaDA{@QgBVoK[TKo@MmBb@_BO}N@Ho@QcAGmCHyC_AcG_@yE?uCIGJg@MgBJ?Bi@BwCUsAAuBVk@HkASk@Zk@OwFY]E_@Xq@?eAG]YaARSBi@Kg@TwJKoFj@KIiBn@yB]yAMsDG]_@KwDtAi@r@SQoCf@kBQHKCuJYgBNMBaGKgCNaAXw@K{ClGPtAY@Qf@Sl@XnG_@Z_GdDwF?u@fAwDFiA^qALqCAm@S_@DqEd@}BBeDnCkPKm@nES@c@_@u@Bs@tAkInAaE?uAnAgEK_B@eA\\qD\\aAnAyAB[|@}AXeCz@sD`CkGA_@r@iBp@wG\\oACe@r@sBHgApBaFb@{DZs@XqCVgANEGEZqAG}@dAaCx@{Aa@o@OaA@mAXk@RqB^{HU{Jw@mJmAm@_@aCQwFOaACqAL?\\{A?oAIAJy@tAsAXw@D{Bd@sAFw@Q{Cf]ynAZDMBlAF^[_@b@_Cd@eBSo@a@{@xABl@NnA|@dBh@bCiHxJqAjDwEjPc@~BBb@ZJxAy@Br@}B|IsAvAArBc@~BaBhCL`Eo@|BAzAOv@iBfCO`D_@fAfAjMrArAb@`DZ`D\\nKuAhN?fAR~@Xp@nDtB_@YIF}BgBoB|COv@A~Ac@hBUhCe@x@yAjHaCzH^kAAt@^\\VFz@g@v@h@GV\\~@lBLNbDGpAKG@hFZ|@@bA[tBCp@D~Ca@v@Du@KPf@IOMAZN~DA`JEzDRz@DxDH@BYMDFnAOn@RxCWv@GvFUp@TvCCnBPhDMjQMx@Lt@GjBL~KPn@O@?dANpAWHCX@tG[zB^`@FxCA^GKm@bBXEIHj@n@OONzFUdAR`CGUDPUDj@tBJ|AYfFMXHz]LtDMlAHtB]jDNLR~CKbJ_@bETGKTLHVhDJ|CS`BGjDPvHQxCYz@Np@Gf@Fe@Kd@LM?Nr@eBrCs@^g@RTXSvBJvChATCw@Y|@\\Ni@p@CX`@_@Yb@AtA|@XCQq@l@DRSl@\\GSPBvA`B^@Bi@dC\\RCC]RBj@xAjAWBWXH@]^b@p@Sp@b@n@e@xANVV?c@bAPd@MESv@MvBf@~Em@z@VhBTlB]l@HjBv@GInBEGg@NI`BUn@P[U`@IbFE';
      
      console.log(decodePolyline(polyline));

      var polylineDecode = decodePolyline(polyline);

      console.log(polylineDecode);

      const options = {
        strokeColor: '#B3E8FC',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#B3E8FC',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
      };

  return (
      <>
    <LoadScript
      googleMapsApiKey="AIzaSyBgSA1rGfdoursQd0XYwmsg6mEk-qohIPc"
    >

    <div className='mapbox-container'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Polyline 
        onLoad={onLoad}
        path={polylineDecode}
        options={options}
        />
        </>
      </GoogleMap>
      </div>
    </LoadScript>
    </>
  )
}

export default React.memo(MapBox)