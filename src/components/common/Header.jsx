import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      className="header"
    >
      <Container fluid="xxl">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link href="#features">SERVICES</Nav.Link>
            <Nav.Link href="#pricing">Solutions</Nav.Link>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Company</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Technology" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Company</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Company</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Company</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="right-menu d-flex align-items-center">
            <Nav.Link href="#deets">Stack hub login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="danger">
                Get a quete <i class="fa-solid fa-chevron-right"></i>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
