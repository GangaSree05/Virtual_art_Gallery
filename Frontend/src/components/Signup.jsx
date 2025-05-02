import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); 

  const handleSignup = (e) => {
    e.preventDefault();
    if (role === "artist") {
      navigate("/artist-home");
    } else if (role === "buyer") {
      navigate("/buyer-home");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <div className="role-selection">
          <button type="button" className={role === "artist" ? "selected" : ""} onClick={() => setRole("artist")}>Artist</button>
          <button type="button" className={role === "buyer" ? "selected" : ""} onClick={() => setRole("buyer")}>Buyer</button>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
