import React from "react";
import "../styles/Home.css";
import HeroVideo from "../components/HeroVideo";
import Navbar from "../components/Navbar";

const Home = () => {
  
  return (
    <>
<Navbar />

      <HeroVideo />

      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Explore the Pearl City</h1>
            <h3>with AJA Tourism Corporation</h3>
            <p>Experience the beauty of the city</p>

            <button className="hero-btn">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
