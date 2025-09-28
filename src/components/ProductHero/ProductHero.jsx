import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductHero.scss";
import {IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

function ProductHero({ wishlist, addToCart, cart, toggleWishlist }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const isInCart = (productId) => {
    return Array.isArray(cart) && cart.some((item) => item.id === productId);
  };

   const isInWishlist = (id) => wishlist.some(item => item.id === id);

  return (
    <div className="products-page">
      <aside className="sidebar">
        <h3>Filters</h3>
        <div className="filter-section">
          <h4>Search</h4>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-section">
          <h4>Category</h4>
          <ul>
            <li>Perfumes</li>
            <li>Cosmetics</li>
            <li>Accessories</li>
          </ul>
        </div>
      </aside>

      <main className="products-grid">
        <h2 className="page-title">Our Collection</h2>
        <div className="grid">
          {filteredProducts.slice(5, 10).map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || product.thumbnail}
                alt={product.title}
              />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <div className="actions">
                <Link to={`/product/${product.id}`} className="btn">
                  View Details
                </Link>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="wishList-btn"
                >
                  {isInWishlist(product.id) ? (
                    <IoMdHeart color="red" />
                  ) : (
                    <IoMdHeartEmpty />
                  )}
                </button>
                <button
                  onClick={() => addToCart(product)}
                  disabled={isInCart(product.id)}
                  className="btn"
                >
                  {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductHero;
