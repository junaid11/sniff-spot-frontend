import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASpot } from '../../api';
import ShowSpotListingHeader from './ShowSpotListingHeader';
import ShowSpotListingImageCarousel from './ShowSpotListingImageShowSpotListingImageCarousel';
import ShowSpotListingReviews from './ShowSpotListingReviews';

function ShowSpotListingPage() {
  const { id } = useParams();
  const [spot, setSpot] = useState({});

  useEffect(() => {
    getASpot(id)
      .then((response) => setSpot(response.data))
      .catch((e) => console.log(e));
  }, []);

  return Object.keys(spot).length !== 0 ? (
    <div className="container pt-5">
      <ShowSpotListingHeader spot={spot} />
      <ShowSpotListingImageCarousel />
      <ShowSpotListingReviews reviews={spot.reviews} />
    </div>
  ) : (
    <div> Loading ... </div>
  );
}

export default ShowSpotListingPage;
