/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string } from 'prop-types';

function PriceAndLocation({ rate, location }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <span className="text-bold">{`$ ${rate} `}</span>
        <span className="text-secondary">dog/hour</span>
      </div>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon="location-dot" color="grey" />
        <span className="text-secondary mx-1">{location}</span>
      </div>
    </div>
  );
}

PriceAndLocation.propTypes = {
  rate: string.isRequired,
  location: string.isRequired
};

export default PriceAndLocation;
