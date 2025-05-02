import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const artworks = [
    { id: 1, name: "Sunset Bliss", price: 500, artist: "Alice Doe", img: "/art567.jpg" },
    { id: 2, name: "Ocean Waves", price: 750, artist: "Bob Smith", img: "/art1234.jpg" },
  ];

  const handleArtworkClick = (art) => {
    setSelectedArt(art);
  };

  const closePopup = () => {
    setSelectedArt(null);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-grid">
        {artworks.map((art) => (
          <div key={art.id} className="cart-item" onClick={() => handleArtworkClick(art)}>
            <img src={art.img} alt={art.name} />
            <p>{art.name}</p>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div className="billing-popup">
          <div className="billing-content">
            <h3>Billing Details</h3>
            <p><strong>Artwork:</strong> {selectedArt.name}</p>
            <p><strong>Artist:</strong> {selectedArt.artist}</p>
            <p><strong>Price:</strong> ${selectedArt.price}</p>
            <button className="close-btn" onClick={closePopup}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
