import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import "./homeProduct.scss";

function HomeProduct({ wishlist , toggleWishlist}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    console.log("data", products);
  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="home-products">
      {products.slice(5, 10).map((product) => (
        <div
          className="prod-card"
          key={product.id}
        >
          <img
            src={product.image || product.thumbnail}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="view-link">View Details</Link>

          <button
            onClick={() => toggleWishlist(product)}
            className="wishlist-btn"
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
