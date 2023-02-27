/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ShowSpotListingImageCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <img src={image.url} alt="Loading..." className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ShowSpotListingImageCarousel;
