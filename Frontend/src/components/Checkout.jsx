import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const { selectedArtworks } = location.state || { selectedArtworks: [] };

  const subtotal = selectedArtworks.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    setShowPopup(true);
  };

  return (
    <div className="checkout-container">
      <div className="left-panel">
        <h2>Payment</h2>
        <div className="section">
          <h3>Customer</h3>
          <p>madlline869@gmail.com <button className="switch-btn">Switch account</button></p>
        </div>
        <div className="section">
          <h3>Shipping</h3>
          <p>Madlline<br />162 Damion Roads<br />Marquisemouth<br />North Carolina</p>
          <button className="edit-btn">Edit</button>
        </div>
        <div className="section">
          <h3>Payment method</h3>
          <div className="payment-method">
            <label><input type="radio" checked readOnly /> Credit card</label>
            <input type="text" placeholder="Credit Card Number" />
            <div className="card-details">
              <input type="text" placeholder="Expiration" />
              <input type="text" placeholder="CVV" />
            </div>
            <label><input type="radio" /> Debit Cards / Net Banking / UPI / EMI / Wallets</label>
          </div>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
      </div>

      <div className="right-panel">
        <h3>Order summary</h3>
        <p>{selectedArtworks.length} Items</p>
        <div className="order-items">
          {selectedArtworks.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.img} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="summary">
          <p>Subtotal: ${subtotal}</p>
          <p>Shipping: Free</p>
          <p>Total (INR): ₹{Math.round(subtotal * 0.394)} {/* rough USD to INR */}</p>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>✅ Order Placed Successfully!</h3>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
