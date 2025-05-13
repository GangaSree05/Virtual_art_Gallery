import React, { useState } from "react";
import "./SoldArts.css";

const SoldArts = () => {
  const [uploadedArts, setUploadedArts] = useState([
    {
      id: 1,
      title: "Rocking Lady 1 | Handmade Canvas Painting",
      image: "/art123.jpg",
      size: "32 x 32 in",
      medium: "Acrylic Colors on Canvas",
      type: "Handmade Painting",
      oldPrice: 34450,
      newPrice: 10400,
    },
    {
      id: 2,
      title: "Abstract Thoughts | Canvas Art",
      image: "/art132.jpg",
      size: "24 x 30 in",
      medium: "Oil on Canvas",
      type: "Handmade Painting",
      oldPrice: 18999,
      newPrice: 9200,
    },
    {
      id: 3,
      title: "Nature Flow | Landscape Art",
      image: "/art1234.jpg",
      size: "40 x 28 in",
      medium: "Watercolor on Paper",
      type: "Handmade Painting",
      oldPrice: 21200,
      newPrice: 10000,
    },
  ]);

  return (
    <div className="uploaded-arts">
      <h2>Sold Artworks</h2>
      {uploadedArts.length === 0 ? (
        <p className="no-arts">You haven't uploaded any artworks yet.</p>
      ) : (
        <div className="arts-grid">
          {uploadedArts.map((art) => (
            <div key={art.id} className="art-card">
              <img src={art.image} alt={art.title} className="uploaded-art-img" />
              <div className="art-info">
                <h4>{art.title}</h4>
                <p className="by-artist">By Community Artists Group <span className="verified-badge">✔</span></p>
                <p><strong>{art.type}</strong> &nbsp; {art.size}</p>
                <p>{art.medium}</p>
                <div className="price-section">
                  <span className="old-price">₹{art.oldPrice.toLocaleString()}</span>
                  <span className="new-price">₹{art.newPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoldArts;
