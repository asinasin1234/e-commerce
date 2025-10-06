import React from "react";
import perfume from "../..//assets/perfume.jpeg";
import "./hero.scss";

function Hero() {
  const backgroundImage =
    "https://i.pinimg.com/originals/39/38/53/393853929936912175.jpg";

  return (
    <>
      <div className="hero-cont">
        <div className="hero-text">
          <h1>Discover Your Signature Scent</h1>
          <p>"Perfume is the art that makes memory unforgettable."</p>
        </div>
      </div>
      <div className="hero-brands">
        <h2>Perfume Brands</h2>
        <p>Explore the top curated brands for you</p>
      </div>
    </>
  );
}

export default Hero;
