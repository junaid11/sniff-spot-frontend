import React, { useState, useEffect } from 'react';
import { getAllSpots } from '../../../api';
import CountLister from '../../../components/CountLister';
import ListingCardGroup from '../../../components/ListingCardGroup';

function HomePageContent() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getAllSpots()
      .then((response) => setListings(response.data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="container">
      <h1>Off leash dog parks for rent near you</h1>
      <CountLister count={listings.length} />
      <ListingCardGroup listings={listings} />
    </div>
  );
}

export default HomePageContent;
