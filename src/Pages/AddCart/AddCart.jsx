import { useEffect, useState } from "react";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const coupons = { DISCOUNT10: 0.1, DISCOUNT20: 0.2 };
  const [coupon, setCoupon] = useState(localStorage.getItem("coupon") || "");
  const [appliedCoupon, setAppliedCoupon] = useState(localStorage.getItem("coupon") || "");
  
  const safeCart = Array.isArray(cart) ? cart : [];

  const total = safeCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = coupons[appliedCoupon] ? total * coupons[appliedCoupon] : 0;
  const finalTotal = total - discount;

 const applyCoupon = () => {
    if (coupons[coupon]) {
      setAppliedCoupon(coupon); 
      localStorage.setItem("coupon", coupon);
      alert(`Coupon applied: ${coupon}`);
      setCoupon(""); 
    } else {
      alert("Invalid coupon code");
    }
  };

   useEffect(() => {
    setCoupon("");
    setAppliedCoupon("");
    localStorage.removeItem("coupon");
  }, [cart]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>
      {safeCart.length === 0 && <p>No items in cart</p>}
      {safeCart.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
          <img src={item.image || item.thumbnail} alt={item.title} style={{ height: "150px", objectFit: "contain" }} />
          <h3>{item.title}</h3>
          <p>${item.price} x {item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${finalTotal.toFixed(2)}</h3>
      <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter Coupon" />
      <button onClick={applyCoupon}>Apply Coupon</button>
    </div>
  );
}

export default Cart;
