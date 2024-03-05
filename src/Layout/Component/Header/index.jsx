
import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              BookStore Nhat Duy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-end">
              <Nav.Link href="/" className="text-uppercase" >Home</Nav.Link>
              <Nav.Link href="/menu" className="text-uppercase">Menu</Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">About</Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

export default Header;