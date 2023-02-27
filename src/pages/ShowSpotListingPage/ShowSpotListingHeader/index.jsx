import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { number, shape, string } from 'prop-types';
import Review from '../../../components/Review';
import ShowSpotListingHeaderSignInCard from './ShowSpotListingHeaderSignInCard';

function ShowSpotListingHeader({ spot: { title, price, reviews } }) {
  const avgReviewRating =
    reviews.reduce((accumulator, object) => {
      return accumulator + object.rating;
    }, 0) / reviews.length;

  return (
    <div className="container">
      <Row gx={5}>
        <Col>
          <h1>{title}</h1>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon="location-dot" color="gray" className="me-1" />
              <span>Location</span>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon="circle-user" color="gray" className="me-1" />
              <span>Hosted</span>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon="circle-check" color="#f2c94c" className="me-1" />
              <span>Membership offered</span>
            </div>
          </div>
        </Col>
        <Col>
          <ShowSpotListingHeaderSignInCard
            price={price}
            stars={avgReviewRating}
            count={reviews.length}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Review stars={avgReviewRating} count={reviews.length} />
        </Col>
      </Row>
    </div>
  );
}

ShowSpotListingHeader.propTypes = {
  spot: shape({ title: string.isRequired, price: number.isRequired }).isRequired
};

export default ShowSpotListingHeader;
