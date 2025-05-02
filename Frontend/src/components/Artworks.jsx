import { useState } from "react";
import "./Artworks.css";
import art1 from "../assets/art11.jpg";
import art2 from "../assets/art12.jpg";
import art3 from "../assets/art13.jpg";
import art4 from "../assets/art14.jpg";
import art5 from "../assets/art15.jpg";
import art6 from "../assets/art16.jpg";

const artworks = [
  { id: 1, image: art1, title: "Sunset Dreams", artist: "John Doe" },
  { id: 2, image: art2, title: "Ocean Bliss", artist: "Emma Smith" },
  { id: 3, image: art3, title: "Abstract Colors", artist: "Alex Brown" },
  { id: 4, image: art4, title: "Whispers of the Wind", artist: "Meera Sharma" },
  { id: 5, image: art5, title: "Midnight Serenity", artist: "Rohan Kapoor" },
  { id: 6, image: art6, title: "Blooming Dreams", artist: "Aanya Verma" }
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
            <span className="close" onClick={() => setSelectedArt(null)}>&times;</span>
            <img src={selectedArt.image} alt={selectedArt.title} className="zoomed-art" />
            <h3>{selectedArt.title}</h3>
            <p>Artist: {selectedArt.artist}</p>
            <button className="wishlist-btn">Add to Wishlist</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artworks;
