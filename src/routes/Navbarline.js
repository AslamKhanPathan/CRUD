import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../Project/allcssproject/nav.css"

export const Navbarline = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"  sticky="top">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link  href="#home">about</Nav.Link>
            <Nav.Link href="#home">contact</Nav.Link>
            <Nav.Link href="/contact">Services</Nav.Link> */}
            <Link className="nav-link-contain" to="/">Home</Link>
            <Link className="nav-link-contain" to="/contact">Contact</Link>
            <Link className="nav-link-contain" to="/Services">Services</Link>
            <Link className="nav-link-contain" to="/about">About</Link>
            <Link className="nav-link-contain" to="/login">Login</Link>
            <Link className="nav-link-contain" to="/registation">Registation</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
