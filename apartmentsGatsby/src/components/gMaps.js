import React from "react"
import GoogleMapReact from "google-map-react"
import Image from "../components/image"

const defaultProps = {
  center: {
    lat: 43.356959,
    lng: 16.952332,
  },
  zoom: 15,
}

const Marker = props => {
  return (
    <div style={{ width: "50px", position: "absolute", top: "-50" }}>
      <Image filename="marker.png" alt="marker"></Image>
    </div>
  )
}

const GoogleMap = () => (
  <div style={{ height: "50vh", width: "100%" }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: "AIzaSyDloMSI7dwiI3TDEhjM5Lc37H9ydLFvohI" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
      ></Marker>
    </GoogleMapReact>
  </div>
)

export default GoogleMap
