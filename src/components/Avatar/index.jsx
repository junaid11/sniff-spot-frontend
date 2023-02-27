import React from 'react';
import Image from 'react-bootstrap/Image';
import './Avatar.css';

function Avatar() {
  return (
    <div className="d-flex">
      <Image
        rounded
        roundedCircle
        src="https://i0.wp.com/www.canterburysociety.org.uk/wp-content/uploads/2020/04/person-placeholder.jpg?w=500&ssl=1"
        className="avatar me-3"
      />
      <div className="d-flex flex-column">
        <span>Anon</span>
        <span className="text-secondary">Feb 11, 2023</span>
      </div>
    </div>
  );
}

export default Avatar;
