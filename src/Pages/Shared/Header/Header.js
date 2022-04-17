import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/">
            Photographer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              {user ? (
                <button
                  onClick={handleSignout}
                  className="btn btn-light rounded-pill px-3"
                >
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
