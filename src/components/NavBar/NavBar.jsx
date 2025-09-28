import React from "react";
import "./navBar.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-cont fixed-top">
        <Container className="nav-cont">
         
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-left">
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
              <NavLink to="/Products" className="nav-item">
                Products
              </NavLink>
            </Nav>

            <Nav className="nav-right">
              <NavLink to="/WishList" className="nav-item card-btn" >
                <IoMdHeartEmpty />
              </NavLink>
              <NavLink to="/AddCart" className="nav-item card-btn">
                <TiShoppingCart />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
