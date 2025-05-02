import React from "react";
import { Link } from "react-router-dom";
import "./ArtistHome.css";

const ArtistHome = () => {
  return (
    <div className="artist-home">
      <nav className="artist-navbar">
        <div className="logo">Artist Dashboard</div>
        <ul>
          <li><Link to="/uploaded-arts">Uploaded Arts</Link></li>
          <li><Link to="/upload-arts">Upload Arts</Link></li>
          <li><Link to="/artistprofile">Profile</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>Welcome, Creative Soul!</h1>
        <p>Showcase your talent, upload your finest artworks, and inspire others.</p>
      </header>

      <section className="gallery-preview">
        <h2>Featured Creations</h2>
        <div className="gallery-grid">
          <img src="/artist1.jpg" alt="Artwork 1" />
          <img src="/artist2.jpg" alt="Artwork 2" />
          <img src="/artist3.jpg" alt="Artwork 3" />
        </div>
      </section>

      <section className="artist-feature">
        <h2>Your Artistic Space</h2>
        <p>Upload new pieces, organize your portfolio, and reach art lovers worldwide.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Virtual Art Gallery | All rights reserved</p>
      </footer>
    </div>
  );
};

export default ArtistHome;
