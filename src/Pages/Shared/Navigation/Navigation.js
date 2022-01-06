import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <div className="d-flex">
            <img style={{ width: "50px" }} className="me-2" src="" alt="" />
            <span className="ms-2 mb-0">HR.Pro</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/AddEmployee">
              Add Employee
            </Nav.Link>
            <Nav.Link as={NavLink} to="/AddMultiEmployee">
              Add Multiple
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            Hello, <span className="fw-bold text-white me-2">Sir</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
