import React from 'react';
import Card from 'react-bootstrap/Card';
import Avatar from '../../../components/Avatar';
import Review from '../../../components/Review';

function ShowSpotListingReviews({ reviews }) {
  return reviews.map((review) => {
    return (
      <Card className="mt-4">
        <Card.Body>
          <Avatar />
          <Review stars={5} />
          <p className="mt-2">{review.content}</p>
        </Card.Body>
      </Card>
    );
  });
}

export default ShowSpotListingReviews;
