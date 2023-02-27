/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { arrayOf, number, shape, string } from 'prop-types';

import ListingCard from '../ListingCard';
import { deleteASpot } from '../../api';

function ListingCardGroup({ listings = [], setListings }) {
  const deleteAListing = (spotId) => {
    deleteASpot(spotId).then(() => {
      alert('Successfully deleted');
      setListings(listings.filter((list) => list.id !== spotId));
    });
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon="circle-check" color="green" size="1x" />
        <span>{`${listings.length} spots match your preferences`}</span>
      </div>
      <Row xs={1} md={3} className="pt-5">
        {listings.map((listing) => {
          return (
            <Col key={listing.id}>
              <ListingCard listing={listing} deleteAListing={deleteAListing} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

ListingCardGroup.propTypes = {
  listings: arrayOf(
    shape({
      id: number,
      title: string,
      description: string,
      images: arrayOf(shape({ id: number, url: string })),
      review: shape({ id: number, rating: number, comment: string })
    })
  ).isRequired
};

export default ListingCardGroup;
