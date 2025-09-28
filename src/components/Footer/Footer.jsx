import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="brand">XIV Fragrances</h2>
        <p>"A scent that stays long after the moment is gone."</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Discover</h4>
          <ul>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Gift Sets</li>
          </ul>
        </div>

        <div>
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Ingredients</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 XIV Fragrances — Where Elegance Meets Aroma</p>
      </div>
    </footer>
  );
}

export default Footer;
