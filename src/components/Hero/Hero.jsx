import React from "react";
import perfume from "../..//assets/perfume.jpeg";
import "./hero.scss";

function Hero() {
  const backgroundImage =
    "https://i.pinimg.com/originals/39/38/53/393853929936912175.jpg";

  return (
    <>
      <div
        className="hero-cont"
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${perfume})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          paddingLeft: "0",
          borderRadius: "30px",
          borderRadiusTop: "0",
          overflow: "hidden",
        }}
      >
        <div className="hero-text">
          <h1
            style={{ fontSize: "4rem", color: "#4b0082", marginBottom: "20px" }}
          >
            Discover Your Signature Scent
          </h1>
          <p
            style={{
              fontSize: "2rem",
              color: "#6a0dad",
              fontStyle: "italic",
            }}
          >
            "Perfume is the art that makes memory unforgettable."
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(200, 180, 220, 0.8)",
          textAlign: "center",
          padding: "30px 0",
          margin: "40px 0",
          borderRadius: "15px",
        }}
      >
        <h2
          style={{
            color: "#4b0082",
            fontSize: "2rem",
            margin: 0,
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Perfume Brands
        </h2>
        <p
          style={{
            color: "#6a0dad",
            fontStyle: "italic",
            marginTop: "10px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Explore the top curated brands for you
        </p>
      </div>
    </>
  );
}

export default Hero;
