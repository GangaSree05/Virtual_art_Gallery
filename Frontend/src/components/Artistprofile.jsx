import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistProfile.css";

const ArtistProfile = () => {
  const navigate = useNavigate();

  const artist = {
    name: "Aarav Mehta",
    email: "aarav.art@example.com",
    bio: "Contemporary artist inspired by nature and emotions, creating thought-provoking works that explore the human experience.",
    uploadedArts: 24,
    soldArts: 10,
    revenue: 85000,
    profileImage: "https://via.placeholder.com/150", // Use an actual image here
  };

  const handleLogout = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="artist-profile">
      <div className="profile-header">
        <h1>Artist Profile</h1>
      </div>

      <div className="profile-details">
        <div className="profile-image">
          <img src={artist.profileImage} alt={artist.name} />
        </div>

        <div className="info">
          <h2>{artist.name}</h2>
          <p className="bio">{artist.bio}</p>
          <p className="email">Email: <a href={`mailto:${artist.email}`}>{artist.email}</a></p>
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
