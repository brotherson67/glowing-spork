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

      const path = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
      ];
      
      const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        paths: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ],
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
        path={path}
        options={options}
        />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapBox)


