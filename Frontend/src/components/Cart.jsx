import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this for navigation
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const artworks = [
    { id: 1, name: "Sunset Bliss", price: 500, artist: "Alice Doe", img: "/art567.jpg" },
    { id: 2, name: "Ocean Waves", price: 750, artist: "Bob Smith", img: "/art1234.jpg" },
  ];

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    const selectedArtworks = artworks.filter((art) => selectedItems.includes(art.id));
    navigate("/checkout", { state: { selectedArtworks } });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-grid">
        {artworks.map((art) => (
          <div key={art.id} className="cart-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(art.id)}
              onChange={() => handleSelect(art.id)}
            />
            <img src={art.img} alt={art.name} />
            <p>{art.name}</p>
            <p>${art.price}</p>
          </div>
        ))}
      </div>

      {selectedItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
