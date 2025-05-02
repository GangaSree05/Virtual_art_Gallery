import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistProfile.css";

const ArtistProfile = () => {
  const navigate = useNavigate();

  const artist = {
    name: "Aarav Mehta",
    email: "aarav.art@example.com",
    bio: "Contemporary artist inspired by nature and emotions.",
    uploadedArts: 24,
    soldArts: 10,
    revenue: 85000,
  };

  const handleLogout = () => {
    // You can clear user state or token here if needed
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="artist-profile">
      <div className="profile-header">
        <h2>Artist Profile</h2>
      </div>

      <div className="profile-details">
        <div className="info">
          <h3>Name:</h3>
          <p>{artist.name}</p>

          <h3>Email:</h3>
          <p>{artist.email}</p>

          <h3>Bio:</h3>
          <p>{artist.bio}</p>
        </div>

        <div className="stats">
          <div className="stat-box">
            <h4>Uploaded Arts</h4>
            <p>{artist.uploadedArts}</p>
          </div>
          <div className="stat-box">
            <h4>Sold Arts</h4>
            <p>{artist.soldArts}</p>
          </div>
          <div className="stat-box">
            <h4>Revenue</h4>
            <p>₹{artist.revenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ArtistProfile;
