import { useState, useEffect } from "react";
import "./coupen.scss";

function Coupen() {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [savedCoupens, setSavedCoupens] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("coupenDataList")) || [];
    setSavedCoupens(stored);
  }, []);

  const saveCoupen = () => {
    if (!code || !discount) {
      alert("Please enter both fields");
      return;
    }

    const newCoupen = { code, discount: parseFloat(discount) };
    const updated = [...savedCoupens, newCoupen];

    localStorage.setItem("coupenDataList", JSON.stringify(updated));
    setSavedCoupens(updated);

    setCode("");
    setDiscount("");
    alert(`Coupen "${code}" saved!`);
  };

  return (
    <div className="coupen-container">
      <h2 className="coupen-title">Coupen Management</h2>

      <div className="coupen-form">
        <input
          type="text"
          placeholder="Enter Coupen Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="coupen-input"
        />
        <input
          type="number"
          placeholder="Discount (0.2 for 20%)"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="coupen-input"
        />
        <button onClick={saveCoupen} className="coupen-btn">Save Coupen</button>
      </div>

      <h3 className="saved-title">Saved Coupens</h3>
      {savedCoupens.length === 0 ? (
        <p className="empty-msg">No coupens saved yet.</p>
      ) : (
        <ul className="coupen-list">
          {savedCoupens.map((c, index) => (
            <li key={index} className="coupen-item">
              <strong>{c.code}</strong> — {c.discount * 100}% off
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Coupen;
