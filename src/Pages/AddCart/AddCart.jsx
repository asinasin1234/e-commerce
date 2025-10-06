import { useState } from "react";
import "./addCart.scss";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const [enteredCode, setEnteredCode] = useState("");
  const [appliedCoupen, setAppliedCoupen] = useState(null);

  const safeCart = Array.isArray(cart) ? cart : [];

  const total = safeCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Apply coupen
  const applyCoupen = () => {
    const savedCoupen = JSON.parse(localStorage.getItem("coupenDataList"));
    console.log("coupon",savedCoupen);
    
     const found = savedCoupen.find((c) => c.code === enteredCode);

     if (found) {
    setAppliedCoupen(found);
    alert(`Coupen "${found.code}" applied!`);
    setEnteredCode("");
  } else {
    alert("Invalid coupen code");
    setEnteredCode("");
  }
  };

  const discount = appliedCoupen ? total * appliedCoupen.discount : 0;
  const finalTotal = total - discount;

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {safeCart.length === 0 && <p className="empty-msg">No items in cart</p>}
      <div className="cart-items">
        {safeCart.map((item) => (
          <div key={item.id} className="cart-card">
            <img
              src={item.image || item.thumbnail}
              alt={item.title}
              className="cart-img"
            />
            <h3>{item.title}</h3>
            <p>
              ${item.price} x {item.quantity} = {item.price*item.quantity}
            </p>
            <div>
              <div className="change-quantity">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="change-btn"
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  className="change-btn"
                >
                  -
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${finalTotal.toFixed(2)}</h3>
        {appliedCoupen && (
          <p className="applied">
            Coupen Applied: {appliedCoupen.code} ({appliedCoupen.discount * 100}
            %)
          </p>
        )}
        <div className="coupen-box">
          <input
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            placeholder="Enter Coupen Code"
          />
          <button onClick={applyCoupen}>Apply Coupen</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
