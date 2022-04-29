import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../imges/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="orangered">
        <Container>
          <Navbar.Brand className="">
            <img src={logo} alt="car manager" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory" className="text-light">
                Manage Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-light">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
