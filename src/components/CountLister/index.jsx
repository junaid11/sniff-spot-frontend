/* eslint-disable react/prop-types */
import React from 'react';
// import { number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CountLister({ count }) {
  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon="circle-check" color="green" size="1x" />
      <span>{`${count} spots match your preferences`}</span>
    </div>
  );
}

// CountLister.propTypes = {
//   count: number.isRequired
// };

export default CountLister;
