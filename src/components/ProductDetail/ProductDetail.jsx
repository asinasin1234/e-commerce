import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import "./productDetail.scss";

function ProductDetail({ wishlist, addToCart, cart, toggleWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isInCart = (productId) => {
    return Array.isArray(cart) && cart.some((item) => item.id === productId);
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img
          src={product.image || product.thumbnail}
          alt={product.title}
          className="product-img"
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={() => toggleWishlist(product)} className="wishlist-btn">
          {isInWishlist(product.id) ? (
            <IoMdHeart color="red" />
          ) : (
            <IoMdHeartEmpty />
          )}
        </button>
        <button
          onClick={() => addToCart(product)}
          className="cart-btn"
          disabled={isInCart(product.id)}
        >
          {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
