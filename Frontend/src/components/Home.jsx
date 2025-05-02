import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div> 
      <div className="content">
        <h1 className="title">Virtual Art Gallery</h1>
        <p className="description">
          Explore and appreciate stunning artworks from talented artists.
        </p>
        <Link to="/signup" className="explore-button">Explore</Link>
      </div>
    </div>
  );
};

export default Home;
