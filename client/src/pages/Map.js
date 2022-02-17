// import React from 'react';
// import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';


// function Map() {
//   return (
//     <GoogleMap  
//     defaultZoom={10} 
//     defaultCenter={{ lat: 40.760780, lng: -111.891045 }} 
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function MapBox() {
//     return (
//         <div style={{width: '100vh', height: '100vh'}}>
//             <WrappedMap 
//             GoogleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//             loadingElement={<div style= {{height: '100%'}} />}
//             containerElement={<div style={{ height: '100%'}} />}
//             mapElement={<div style={{ height: '100%'}} />}
//             />
//         </div>
//     )
// }

// export default MapBox;

// import React from "react"
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"

// const MapBox = compose(
//   withProps({
//     googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 40.760780, lng: -111.891045 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MapBox
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

import React from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';

//encodePath() and decodePath in the google.maps.geometry.encoding

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 37.745,
  lng: -122.523
};

function MapBox() {
    const onLoad = polyline => {
        console.log('polyline: ', polyline)
      };

    //   const path = [
    //     {lat: 37.772, lng: -122.214},
    //     {lat: 21.291, lng: -157.821},
    //     {lat: -18.142, lng: 178.431},
    //     {lat: -27.467, lng: 153.027}
    //   ];
    const path = [
        {lat: 40.6973, lng: -111.87938},
     {lat: 40.69721, lng: -111.87949},
     {lat: 40.697, lng: -111.87949}
 ,    {lat: 40.69688, lng: -111.87948},
     {lat: 40.69683, lng: -111.87936},
     {lat: 40.69679, lng: -111.87884},
     {lat: 40.69687, lng: -111.87862},
     {lat: 40.69688, lng: -111.8782}
,     {lat: 40.69677, lng: -111.87712},
     {lat: 40.69696, lng: -111.87692},
         {lat: 40.69988, lng: -111.87684},
         {lat: 40.70144, lng: -111.87691},
         {lat: 40.70246, lng: -111.87685},
         {lat: 40.70249, lng: -111.87675},
         {lat: 40.7063, lng: -111.8769}
 ,        {lat: 40.70945, lng: -111.87685},
         {lat: 40.70976, lng: -111.87694},
         {lat: 40.71256, lng: -111.87678},
         {lat: 40.71495, lng: -111.8769}
,         {lat: 40.71576, lng: -111.87689},
         {lat: 40.71606, lng: -111.8768}
,         {lat: 40.71658, lng: -111.87692},
         {lat: 40.71858, lng: -111.87678},
         {lat: 40.71847, lng: -111.87672},
         {lat: 40.71871, lng: -111.87665},
         {lat: 40.71926, lng: -111.87683},
         {lat: 40.71974, lng: -111.87675},
         {lat: 40.72229, lng: -111.87676},
         {lat: 40.72224, lng: -111.87652},
         {lat: 40.72233, lng: -111.87618},
         {lat: 40.72237, lng: -111.87547},
         {lat: 40.72232, lng: -111.8747}
,         {lat: 40.72264, lng: -111.8734}
,         {lat: 40.7228, lng: -111.87231}
,         {lat: 40.7228, lng: -111.87156}
,         {lat: 40.72285, lng: -111.87152},
         {lat: 40.72279, lng: -111.87132},
         {lat: 40.72286, lng: -111.8708}
,         {lat: 40.7228, lng: -111.8708}
 ,        {lat: 40.72278, lng: -111.87059},
         {lat: 40.72276, lng: -111.86983},
         {lat: 40.72287, lng: -111.86941},
         {lat: 40.72288, lng: -111.86882},
         {lat: 40.72276, lng: -111.8686}
,         {lat: 40.72271, lng: -111.86822},
         {lat: 40.72281, lng: -111.868}
 ,        {lat: 40.72267, lng: -111.86778},
         {lat: 40.72275, lng: -111.86654},
         {lat: 40.72288, lng: -111.86639},
         {lat: 40.72291, lng: -111.86623},
         {lat: 40.72278, lng: -111.86598},
         {lat: 40.72278, lng: -111.86563},
         {lat: 40.72282, lng: -111.86548},
         {lat: 40.72295, lng: -111.86515},
         {lat: 40.72285, lng: -111.86505},
         {lat: 40.72283, lng: -111.86484},
         {lat: 40.72289, lng: -111.86464},
         {lat: 40.72278, lng: -111.86276},
         {lat: 40.72284, lng: -111.86156},
         {lat: 40.72262, lng: -111.8615}
,         {lat: 40.72267, lng: -111.86097},
         {lat: 40.72243, lng: -111.86036},
         {lat: 40.72258, lng: -111.85991},
         {lat: 40.72265, lng: -111.85901},
         {lat: 40.72269, lng: -111.85886},
         {lat: 40.72285, lng: -111.8588}
,         {lat: 40.72377, lng: -111.85923},
         {lat: 40.72398, lng: -111.85949},
         {lat: 40.72408, lng: -111.8594}
,         {lat: 40.7248, lng: -111.8596}
 ,        {lat: 40.72534, lng: -111.85951},
         {lat: 40.72529, lng: -111.85945},
         {lat: 40.72531, lng: -111.85758},
         {lat: 40.72544, lng: -111.85706},
         {lat: 40.72536, lng: -111.85699},
         {lat: 40.72534, lng: -111.8557},
         {lat: 40.7254, lng: -111.85502},
         {lat: 40.72532, lng: -111.85469},
         {lat: 40.72519, lng: -111.85441},
         {lat: 40.72525, lng: -111.85363},
         {lat: 40.7239, lng: -111.85372},
         {lat: 40.72347, lng: -111.85359},
         {lat: 40.72346, lng: -111.8535},
        {lat: 40.72326, lng: -111.8534},
         {lat: 40.72303, lng: -111.85353},
         {lat: 40.72167, lng: -111.85337},
         {lat: 40.72153, lng: -111.85209},
         {lat: 40.7207, lng: -111.85085},
        {lat: 40.7207, lng: -111.85058},
        {lat: 40.72034, lng: -111.84966},
         {lat: 40.7203, lng: -111.84929},
         {lat: 40.72014, lng: -111.84888},
         {lat: 40.72007, lng: -111.84815},
         {lat: 40.72008, lng: -111.84792},
         {lat: 40.72018, lng: -111.84776},
         {lat: 40.72015, lng: -111.84671},
         {lat: 40.71996, lng: -111.84608},
         {lat: 40.71994, lng: -111.84525},
         {lat: 40.71922, lng: -111.84247},
         {lat: 40.71928, lng: -111.84224},
        
    ]

      console.log(path);

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
        // paths: [
        //   {lat: 37.772, lng: -122.214},
        //   {lat: 21.291, lng: -157.821},
        //   {lat: -18.142, lng: 178.431},
        //   {lat: -27.467, lng: 153.027}
        // ],
        zIndex: 1
      };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBgSA1rGfdoursQd0XYwmsg6mEk-qohIPc"
    >
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
    </LoadScript>
  )
}

export default React.memo(MapBox)


