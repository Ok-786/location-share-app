import React, { useEffect, useRef, useState } from 'react';
import '../css/Map.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const styles = {
    width: "100%",
    height: "100%",
    // position: "absolute"
};

export default function Map(props) {
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const { center, zoom } = props;

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_GOOGLE_API_KEY;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: center,
                zoom: zoom
            });
            
            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map, center, zoom]);

    return <div ref={el => (mapContainer.current = el)} style={styles} className='map' />;
};
