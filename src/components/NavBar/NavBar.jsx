import React, { useState } from "react";
import "./navBar.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // close menu when any link clicked
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar-cont fixed-top">
        <Container className="nav-cont">
          {/* Hamburger icon for mobile */}
          <div
            className="menu-icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Left nav - desktop only */}
          <Nav className="nav-left">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/Products" className="nav-item">
              Products
            </NavLink>
          </Nav>

          {/* Right icons - always visible */}
          <Nav className="nav-right">
            <NavLink to="/WishList" className="nav-item card-btn">
              <IoMdHeartEmpty />
            </NavLink>
            <NavLink to="/AddCart" className="nav-item card-btn">
              <TiShoppingCart />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Nav className="mobile-nav">
          <NavLink
            to="/"
            className="mobile-item"
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/Products"
            className="mobile-item"
            onClick={handleLinkClick}
          >
            Products
          </NavLink>
          <NavLink
            to="/WishList"
            className="mobile-item"
            onClick={handleLinkClick}
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/AddCart"
            className="mobile-item"
            onClick={handleLinkClick}
          >
            Cart
          </NavLink>
        </Nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="overlay" onClick={handleLinkClick}></div>
      )}
    </div>
  );
}

export default NavBar;
