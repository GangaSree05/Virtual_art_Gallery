import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Virtual Art Gallery</h1>
      <ul className="nav-links">
        <li><Link to="/artworks">Artworks</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
