import { useState } from "react";
import "./Artworks.css";
import art1 from "../assets/art11.jpg";
import art2 from "../assets/art12.jpg";
import art3 from "../assets/art13.jpg";
import art4 from "../assets/art14.jpg";
import art5 from "../assets/art15.jpg";
import art6 from "../assets/art16.jpg";

const artworks = [
  {
    id: 1,
    image: art1,
    title: "Sunset Dreams",
    artist: "John Doe",
    size: "26 x 17 in",
    medium: "Ink Colors on Canvas",
    originalPrice: 1900,
    discountedPrice: 1000,
    discount: 47
  },
  {
    id: 2,
    image: art2,
    title: "Ocean Bliss",
    artist: "Emma Smith",
    size: "30 x 20 in",
    medium: "Oil on Canvas",
    originalPrice: 2200,
    discountedPrice: 1600,
    discount: 27
  },
  {
    id: 3,
    image: art3,
    title: "Abstract Colors",
    artist: "Alex Brown",
    size: "24 x 18 in",
    medium: "Acrylic on Paper",
    originalPrice: 1500,
    discountedPrice: 1100,
    discount: 27
  },
  {
    id: 4,
    image: art4,
    title: "Whispers of the Wind",
    artist: "Meera Sharma",
    size: "28 x 22 in",
    medium: "Watercolor",
    originalPrice: 1800,
    discountedPrice: 1300,
    discount: 28
  },
  {
    id: 5,
    image: art5,
    title: "Midnight Serenity",
    artist: "Rohan Kapoor",
    size: "32 x 24 in",
    medium: "Charcoal on Canvas",
    originalPrice: 2500,
    discountedPrice: 1900,
    discount: 24
  },
  {
    id: 6,
    image: art6,
    title: "Blooming Dreams",
    artist: "Aanya Verma",
    size: "20 x 16 in",
    medium: "Mixed Media",
    originalPrice: 1700,
    discountedPrice: 1200,
    discount: 29
  }
];

const Artworks = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div className="artworks-container">
      <h2>Explore Artworks</h2>
      <div className="art-grid">
        {artworks.map((art) => (
          <img
            key={art.id}
            src={art.image}
            alt={art.title}
            className="art-thumbnail"
            onClick={() => setSelectedArt(art)}
          />
        ))}
      </div>

      {selectedArt && (
        <div className="art-modal">
          <div className="art-modal-content">
            <span className="close" onClick={() => setSelectedArt(null)}>
              &times;
            </span>
            <img
              src={selectedArt.image}
              alt={selectedArt.title}
              className="zoomed-art"
            />
            <h3>{selectedArt.title}</h3>
            <p><strong>Artist:</strong> {selectedArt.artist}</p>
            <p><strong>Size:</strong> {selectedArt.size}</p>
            <p><strong>Medium:</strong> {selectedArt.medium}</p>
            <p>
              <span className="original-price">₹{selectedArt.originalPrice}</span>
              <span className="discounted-price"> ₹{selectedArt.discountedPrice}</span>
              <span className="discount"> ({selectedArt.discount}% off)</span>
            </p>
            <button className="wishlist-btn">Add to Wishlist</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artworks;
