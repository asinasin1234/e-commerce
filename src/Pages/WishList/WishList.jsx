import "./wishList.scss";

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {wishlist.length === 0 && <p className="empty-msg">No items in wishlist</p>}
      <div className="wishlist-items">
      {wishlist.map(item => (
        <div key={item.id} className="wishlist-card">
          <img src={item.image || item.thumbnail} alt={item.title}  className="wishlist-img" />
          <h3>{item.title}</h3>
          <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>Remove</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Wishlist;
