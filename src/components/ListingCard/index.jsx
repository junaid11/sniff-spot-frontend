/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { number, shape, string, arrayOf } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import { deleteASpot } from '../../api';
import Review from '../Review';
import PriceAndLocation from '../PriceAndLocation/Index';
import ShowSpotListingImageCarousel from '../../pages/ShowSpotListingPage/ShowSpotListingImageShowSpotListingImageCarousel';
import './ListingCard.css';

function ListingCard({ listing, deleteAListing }) {
  const { id, title, description, price, reviews, images } = listing;
  const navigate = useNavigate();

  const avgReviewRating =
    reviews.reduce((accumulator, object) => {
      return accumulator + object.rating;
    }, 0) / reviews.length;

  return (
    <div className="card-design">
      <Card className="selectable-listing-card" onClick={() => navigate(`/show/${id}`)}>
        <ShowSpotListingImageCarousel images={images} />
        <Card.Body>
          <div className="d-flex jusify-content-between align-items-center">
            <Card.Title>{title}</Card.Title>
            <FontAwesomeIcon icon="circle-check" color="#f2c94c" size="2x" />
          </div>
          {reviews.length > 0 ? (
            <Review stars={avgReviewRating} count={reviews.length} />
          ) : (
            'No Ratings Yet'
          )}
          <PriceAndLocation rate={price} location={description} />
        </Card.Body>
      </Card>
      <Button className="mt-2" variant="primary" onClick={() => navigate(`/edit/${id}`)}>
        Edit This Listing
      </Button>
      <Button className="mt-2" variant="danger" onClick={() => deleteAListing(id)}>
        Delete this Listing
      </Button>
    </div>
  );
}

ListingCard.propTypes = {
  listing: shape({
    id: number,
    title: string,
    description: string,
    images: arrayOf(shape({ id: number, url: string })),
    review: shape({ id: number, rating: number, comment: string })
  }).isRequired
};

export default ListingCard;
