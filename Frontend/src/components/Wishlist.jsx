import { useState } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, image: "/art567.jpg", title: "Sunset Dreams", artist: "John Doe" },
    { id: 2, image: "/art1234.jpg", title: "Ocean Bliss", artist: "Emma Smith" }
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((art) => art.id !== id));
  };

  const moveToCart = (id) => {
    const artToMove = wishlist.find((art) => art.id === id);
    console.log("Moved to cart:", artToMove); // Replace with actual cart logic
    removeFromWishlist(id);
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((art) => (
            <div key={art.id} className="wishlist-item">
              <img src={art.image} alt={art.title} className="wishlist-image" />
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <div className="wishlist-buttons">
                <button className="remove-btn" onClick={() => removeFromWishlist(art.id)}>
                  Remove
                </button>
                <button className="move-btn" onClick={() => moveToCart(art.id)}>
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
