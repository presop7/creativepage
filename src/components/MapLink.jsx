import React from "react";

const MapLink = ({ latitude, longitude }) => {
  const mapURL = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${latitude},${longitude}&zoom=15`;

  const openGoogleMaps = () => {
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsURL, "_blank");
  };

  return (
    <div className="mapButton" onClick={openGoogleMaps}>
      <iframe
        title="Map Preview"
        loading="lazy"
        // allowFullScreen
        src={mapURL}
      ></iframe>
    </div>
  );
};

export default MapLink;
