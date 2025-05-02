import "./ArtShowcase.css";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
const ArtShowcase = () => {
  return (
    <section id="showcase" className="art-showcase">
      <h2>Featured Artworks</h2>
      <div className="gallery">
        <img src={art1} alt="Artwork 1" className="art-image" />
        <img src={art2} alt="Artwork 2" className="art-image" />
        <img src={art3} alt="Artwork 3" className="art-image" />
        <img src={art4} alt="Artwork 4" className="art-image" />
        <img src={art5} alt="Artwork 5" className="art-image" />
      </div>
    </section>
  );
};

export default ArtShowcase;
