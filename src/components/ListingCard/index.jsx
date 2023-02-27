import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { number, shape, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Review from '../Review';
import PriceAndLocation from '../PriceAndLocation/Index';
import './ListingCard.css';

function ListingCard({ listing }) {
  const { id, title, description, price, reviews } = listing;
  const navigate = useNavigate();

  const avgReviewRating =
    reviews.reduce((accumulator, object) => {
      return accumulator + object.rating;
    }, 0) / reviews.length;

  return (
    <>
      <Card className="selectable-listing-card" onClick={() => navigate(`/show/${id}`)}>
        <Card.Img
          variant="top"
          src="https://codescandy.com/geeks-bootstrap-5/assets/images/placeholder/placeholder-4by3.svg"
          alt="card image"
        />
        <Card.Body>
          <div className="d-flex jusify-content-between align-items-center">
            <Card.Title>{title}</Card.Title>
            <FontAwesomeIcon icon="circle-check" color="#f2c94c" size="2x" />
          </div>
          <Card.Text>
            <Review stars={avgReviewRating} count={reviews.length} />
          </Card.Text>
          <PriceAndLocation rate={price} location={description} />
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
        Edit This Listing
      </Button>
    </>
  );
}

ListingCard.propTypes = {
  listing: shape({
    id: number,
    title: string,
    description: string,
    images: [],
    review: shape({ id: number, rating: number, comment: string })
  }).isRequired
};

export default ListingCard;
