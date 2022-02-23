import './strava.css';
import React from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { auto } from '@popperjs/core';
const decodePolyline = require('decode-google-map-polyline');


//encodePath() and decodePath in the google.maps.geometry.encoding

const containerStyle = {
  width: '350px',
  height: '350px',
  // marginRight: '200px',
  margin: auto,
  padding: '30px',

  // display: 'block',
  // height: '100%',
  // width: '100%'

};

const center = {
  lat: 40.733608,
  lng: -111.837646
};

function MapBox(maps) {
    const onLoad = polyline => {
        console.log('polyline: ', polyline)
      };

      const decodePolyline = require('decode-google-map-polyline');
      var polyline = maps.polyline;

      var polylineDecode = decodePolyline(polyline);


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
        margin={'auto'}
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