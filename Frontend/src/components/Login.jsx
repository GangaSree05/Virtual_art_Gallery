import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); 

  const handleLogin = (e) => {
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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        
        <div className="role-selection">
          <button type="button" className={role === "artist" ? "selected" : ""} onClick={() => setRole("artist")}>Artist</button>
          <button type="button" className={role === "buyer" ? "selected" : ""} onClick={() => setRole("buyer")}>Buyer</button>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
