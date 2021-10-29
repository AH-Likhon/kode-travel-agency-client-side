import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="text-light" as={HashLink} to="/home">Home</Nav.Link>
            <Nav.Link className="text-light" as={HashLink} to="/offers">Offers</Nav.Link>
            <Nav.Link className="text-light" as={HashLink} to="/addNewOffer">Add A New Offer</Nav.Link>
            <Nav.Link className="text-light" as={HashLink} to="/about-us">About Us</Nav.Link>

            <Navbar.Text>
              <a className="text-decoration-none text-info me-2" href="#login">{user?.displayName}</a>
            </Navbar.Text>
            {user?.email ?
              <Button onClick={logOut} variant="dark">Log Out</Button> :
              <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;