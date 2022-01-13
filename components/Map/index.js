import React from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ lat, lng }) => {
    const iconPerson = new L.Icon({
        iconUrl: '/icons/icon-location.svg',
        iconSize: [46, 56],
    });

    return (
        <MapContainer center={[lat, lng]}
                      zoom={18}
                      zoomControl={false}
        >
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}
                    icon={iconPerson}
            />
        </MapContainer>
    );
};

export default Map;
