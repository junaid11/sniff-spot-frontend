/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { number } from 'prop-types';
import Review from '../../../../components/Review';

function ShowSpotListingHeaderSignInCard({ price, stars, count }) {
  return (
    <Card className="border-0 shadow rounded">
      <Card.Body>
        <h4>Book this spot!</h4>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <h4 className="m-0 me-1">{`$ ${price}`}</h4>
            <span className="m-0">per dog per hour</span>
          </div>
          {count ? <Review stars={stars} count={count} /> : 'Not Rated'}
        </div>
        <div className="d-grid gap-2">
          <Button className="disabled btn-lg" variant="light">
            Sign in
          </Button>
          <Button className="disabled btn-lg" variant="success">
            Join for free
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// ShowSpotListingHeaderSignInCard.propTypes = {
//   price: number.isRequired,
//   stars: number.isRequired,
//   count: number.isRequired
// };

export default ShowSpotListingHeaderSignInCard;
