import React, { useState } from "react";
import "./UploadArts.css";

const UploadArts = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [size, setSize] = useState("");
  const [medium, setMedium] = useState("");
  const [type, setType] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
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
    console.log("Size:", size);
    console.log("Medium:", medium);
    console.log("Type:", type);
    console.log("Old Price:", oldPrice);
    console.log("Offer Price:", newPrice);
    console.log("Image:", image);
    alert("Artwork uploaded successfully!");
    setTitle("");
    setArtist("");
    setSize("");
    setMedium("");
    setType("");
    setOldPrice("");
    setNewPrice("");
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
          placeholder="Artist / Group Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Size (e.g. 32 x 32 in)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Medium (e.g. Acrylic Colors on Canvas)"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type (e.g. Handmade Painting)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Original Price (₹)"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Offer Price (₹)"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

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
