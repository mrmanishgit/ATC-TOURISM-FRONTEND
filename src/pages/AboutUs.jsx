import React from "react";
import "../styles/AboutUs.css";
import Navbar from "../components/Navbar";


const AboutUs = () => {
  const imgPath = "/src/assets/Hyd.png";

  return (
    <>
    <Navbar/>
    <div className="aboutus">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>About AJA Tourism</h1>
            <p>
              AJA Tourism Corporation is your gateway to exploring the incredible
              city of Hyderabad and beyond. We specialize in offering exclusive
              and customized travel packages that cater to your preferences,
              ensuring a memorable experience in the City of Pearls.
            </p>
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <h2>Top Exclusive Packages</h2>

        <div className="package-grid">
          {["Heritage Tour", "Luxury Tour", "Beach Retreat"].map((title, i) => (
            <div className="package-card" key={i}>
              <img src={imgPath} alt={title} />
              <div className="package-body">
                <h3>{title}</h3>
                <p>3 Days · Food · Guide</p>
                <span>₹15,999</span>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section dark">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">Customizable Tours</div>
          <div className="service-card">Hotel & Resorts</div>
          <div className="service-card">Transport Services</div>
          <div className="service-card">24/7 Support</div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section">
        <h2>Top Destinations</h2>

        <div className="destination-grid">
          {[
            "Charminar",
            "Golconda Fort",
            "Hussain Sagar Lake",
            "Ramoji Film City",
          ].map((name, i) => (
            <div className="destination-card" key={i}>
              <img src={imgPath} alt={name} />
              <div className="destination-name">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section dark">
        <h2>Why Book ATC Packages with Us</h2>

        <div className="why-grid">
          <div className="why-card">Experienced Guides</div>
          <div className="why-card">Best Price Guarantee</div>
          <div className="why-card">Personalized Itineraries</div>
          <div className="why-card">Customer Satisfaction</div>
        </div>

        <div className="center">
          <button className="primary-btn">Get in Touch</button>
        </div>
      </section>

    </div>
    </>
  );
};

export default AboutUs;
