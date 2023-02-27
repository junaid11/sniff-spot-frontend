import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomePageHeader.css';

function HomePageHeader() {
  return (
    <div id="homepage-container">
      <div className="text-image-container">
        <img
          src="https://static.sniffspot.com/packs/static/src/assets/img/sniff-seo-bg-header-d-8f7bc8ac7f87f859fbf8.jpg?sizes[]=1920"
          className="img-fluid"
          alt="homepage"
        />
        <div className="text-container">
          <h1>Rent safe and private dog parks hosted by locals </h1>
          <Button variant="success" href="/list-a-spot">
            List a spot
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
