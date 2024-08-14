'use client';
import React, { useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';
import { MapProvider } from '../../../../../providers/MapProvider';

import styles from './styles.module.css';

export const defaultMapContainerStyle = {
  width: '300px',
  height: '647px',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
  lat: 39.9208,
  lng: 32.8541,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
};

const MapComponent = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);



  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.title}>Temas etmek</h2>
      <div className={styles.map}>
        <div className="">
          <p className={styles.start}>4.8</p>
          <p className={styles.address}>FEVZİ ÇAKMAK-2 S 37/20, Kızılay</p>
          <p className={styles.email}>epicbookjourney@gmail.com</p>
        </div>
        {/* <div className={styles.mapImg}> */}
        <div id="map" style={{ width: '100%', height: '400px' }}></div>;
          {/* <MapProvider>
            <GoogleMap
              mapContainerStyle={defaultMapContainerStyle}
              center={defaultMapCenter}
              zoom={defaultMapZoom}
              options={defaultMapOptions}
            ></GoogleMap>
          </MapProvider> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export { MapComponent };
