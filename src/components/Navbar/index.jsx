import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { SniffspotLogo } from '../../svg';

function AppNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-3">
      <Navbar.Brand href="/" className="p-2">
        <SniffspotLogo width="150" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="px-4" href="/">
            Our dog parks
          </Nav.Link>
          <Nav.Link className="px-4" href="/">
            Blog
          </Nav.Link>
          <Nav.Link className="px-4" href="/">
            Top dog trainers
          </Nav.Link>
          <Nav.Link className="px-4" href="/">
            Become a host
          </Nav.Link>
        </Nav>
        <Nav>
          <Button className="mx-1" variant="light">
            Sign in
          </Button>
          <Button className="mx-1" variant="success">
            Join for free
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavBar;
