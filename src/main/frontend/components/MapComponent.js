import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 47.618800,
  lng: -122.329330
};

function MapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDq2FbXXmTZEb_SS7ImbNVybeLgWin6GT4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)

