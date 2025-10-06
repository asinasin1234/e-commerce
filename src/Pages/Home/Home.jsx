import React from "react";
import { Row } from "react-bootstrap";
import HomeProduct from "../../components/HomeProduct/HomeProduct";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

function Home({wishlist , toggleWishlist}) {
  return (
    <>
      <Hero />
      <HomeProduct toggleWishlist={toggleWishlist} wishlist={wishlist}/>
      <Footer />
    </>
  );
}

export default Home;
