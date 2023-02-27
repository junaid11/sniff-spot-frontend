/* eslint-disable react/prop-types */
import React from 'react';
import { number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Review({ stars, count }) {
  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon="star" color="#f2c94c" className="me-1" />
      <div>
        <span className="me-1">{Number.isNaN(stars) ? '' : stars}</span>
        {count ? <span className="text-secondary">{`(${count})`}</span> : 'Not Rated'}
      </div>
    </div>
  );
}

Review.propTypes = {
  stars: number.isRequired,
  count: number.isRequired
};

export default Review;
