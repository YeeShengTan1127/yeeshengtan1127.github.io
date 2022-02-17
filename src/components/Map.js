import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import L from "leaflet";

function Map({ position }) {
  L.Icon.Default.imagePath = "images/leaflet/";
  return (
    <MapContainer center={position} zoom={17} className="leafletMap">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{"We are here!"}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
