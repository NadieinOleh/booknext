"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import styles from "./styles.module.css";

const GoogleMap = () => {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=FEVZ%C4%B0%20%C3%87AKMAK-2%20S%2037/20,%20K%C4%B1z%C4%B1lay+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      />
    </div>
  );
};

const MapComponent = () => {
  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.title}>Temas etmek</h2>
      <div className={styles.map}>
        <div className="">
          <p className={styles.start}>4.8</p>
          <p className={styles.address}>FEVZİ ÇAKMAK-2 S 37/20, Kızılay</p>
          <p className={styles.email}>epicbookjourney@gmail.com</p>
        </div>
        <GoogleMap />
      </div>
    </div>
  );
};

export { MapComponent };
