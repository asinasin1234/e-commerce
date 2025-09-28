function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Wishlist</h2>
      {wishlist.length === 0 && <p>No items in wishlist</p>}
      {wishlist.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
          <img src={item.image || item.thumbnail} alt={item.title} style={{ height: "150px", objectFit: "contain" }} />
          <h3>{item.title}</h3>
          <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
