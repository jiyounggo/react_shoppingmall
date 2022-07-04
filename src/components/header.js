import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../firebase.js";

import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice);
  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link to="/"> Home</Link>
              {user.accessToken == "" ? (
                <Link
                  to="/login"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginLeft: "30px",
                  }}
                >
                  login
                </Link>
              ) : (
                <div onClick={() => LogoutHandler()}>Logout</div>
              )}
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
