import React, { useState } from "react";
import "./uploaded arts.css";

const UploadedArts = () => {
  const [uploadedArts, setUploadedArts] = useState([
    {
      id: 1,
      title: "Starry Night",
    
      image: "/art123.jpg",
    },
    {
      id: 2,
      title: "Abstract Thoughts",
      
      image: "/art132.jpg",
    },
    {
      id: 3,
      title: "Nature Flow",

      image: "/art1234.jpg",
    },
  ]);

  return (
    <div className="uploaded-arts">
      <h2>Your Uploaded Artworks</h2>

      {uploadedArts.length === 0 ? (
        <p className="no-arts">You haven't uploaded any artworks yet.</p>
      ) : (
        <div className="arts-grid">
          {uploadedArts.map((art) => (
            <div key={art.id} className="art-card">
              <img src={art.image} alt={art.title} />
              <div className="art-info">
                <h4>{art.title}</h4>
                <p>{art.artist}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadedArts;
