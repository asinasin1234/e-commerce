import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

function ProductDetail({ wishlist,addToCart , cart , toggleWishlist}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

   const isInCart = (productId) => {
    return Array.isArray(cart) && cart.some(item => item.id === productId);
  };

   const isInWishlist = (id) => wishlist.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image || product.thumbnail}
        alt={product.title}
        style={{ height: "200px" }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
       <button onClick={() => toggleWishlist(product)} className="product-btn">
            {isInWishlist(product.id) ? (
              <IoMdHeart color="red" />
            ) : (
              <IoMdHeartEmpty />
            )}
          </button>
      <button
        onClick={() => addToCart(product)}
        className="btn"
        disabled={isInCart(product.id)}
      >
        {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductDetail;

