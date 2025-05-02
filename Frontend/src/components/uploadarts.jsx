import React, { useState } from "react";
import "./UploadArts.css";

const UploadArts = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Artist:", artist);
    console.log("Image:", image);
    alert("Artwork uploaded successfully!");
    setTitle("");
    setArtist("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="upload-container">
      <h2>Upload New Artwork</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          placeholder="Artwork Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        
        {preview && (
          <div className="preview">
            <p>Preview:</p>
            <img src={preview} alt="Artwork Preview" />
          </div>
        )}
        
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadArts;
