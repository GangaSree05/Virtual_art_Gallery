import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import ArtShowcase from "./ArtShowcase";
import "./BuyerHome.css";

const BuyerHome = () => {
  return (
    <div>
      <Navbar />
      <main className="buyer-home">
        <section className="landing">
          <h1>Discover Amazing Art</h1>
          <p>Browse and collect digital masterpieces from talented artists.</p>
        </section>
        <About />
        <ArtShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default BuyerHome;
