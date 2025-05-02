import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ArtistHome from "./components/ArtistHome";
import BuyerHome from "./components/BuyerHome";
import Artworks from "./components/Artworks";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import UploadedArts from "./components/uploaded arts";
import Contact from "./components/Contact";
import UploadArts from "./components/uploadarts";
import ArtistProfile from "./components/Artistprofile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/artist-home" element={<ArtistHome />} />
      <Route path="/buyer-home" element={<BuyerHome />} />
      <Route path="/artworks" element={<Artworks/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/uploaded-arts" element={<UploadedArts/>} />
      <Route path="/upload-arts" element={<UploadArts/>} />
      <Route path="/artistprofile" element={<ArtistProfile/>} />
      
    </Routes>
  );
}

export default App;
