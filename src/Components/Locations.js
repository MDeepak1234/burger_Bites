import React from 'react';
// import { Link } from 'react-router-dom';
import '../Styles/Locations.css';

function Locations() {
  return (
    <div className="locations-container" style={{"marginTop":"12vh"}}>
      <i className="bi bi-geo-alt-fill locations-icon"></i>
      <p className="locations-text">
        Allow location access for local store menu and promos
      </p>
      <a href="https://www.google.com/maps" className="locations-link">Set Location</a>
    </div>
  );
}

export default Locations;
