import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ShowSpotListingImageCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.internetmatters.org/wp-content/uploads/2021/06/yolo_app.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-vector/yolo-word-vector-illustration-you-600w-2015013080.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ShowSpotListingImageCarousel;
