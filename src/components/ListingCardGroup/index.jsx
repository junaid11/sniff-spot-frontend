import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { arrayOf, number, shape, string } from 'prop-types';
import ListingCard from '../ListingCard';

function ListingCardGroup({ listings = [] }) {
  return (
    <Row xs={1} md={3} className="pt-5">
      {listings.map((listing) => {
        return (
          <Col>
            <ListingCard listing={listing} />
          </Col>
        );
      })}
    </Row>
  );
}

ListingCardGroup.propTypes = {
  listings: arrayOf(
    shape({
      id: number,
      title: string,
      description: string,
      images: [],
      review: shape({ id: number, rating: number, comment: string })
    })
  ).isRequired
};

export default ListingCardGroup;
