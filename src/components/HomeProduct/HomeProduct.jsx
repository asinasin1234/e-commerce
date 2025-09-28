import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import "./homeProduct.scss";

function HomeProduct({ wishlist }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    console.log("data", products);
  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "70px",
        padding: "70px",
        borderRadius: "50px",
      }}
    >
      {products.slice(5, 10).map((product) => (
        <div
          className="prod-card"
          key={product.id}
          style={{ border: "1px solid #ddd", padding: "10px" }}
        >
          <img
            src={product.image || product.thumbnail}
            alt={product.title}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>

          <button
            onClick={() => toggleWishlist(product)}
            className="product-btn"
          >
            {isInWishlist(product.id) ? (
              <IoMdHeart color="red" />
            ) : (
              <IoMdHeartEmpty />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomeProduct;
