import React from "react";
import "./Testimonials.css";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';


const testimonials = [
  
  {
    name: "Mallesh Kumar Patnala",
    location: "Europe",
    review:
      "Our Hyderabad trip was seamless! From the historic Charminar to the serene Hussain Sagar Lake, AJA Tourism made every moment special.",
    rating: "★★★★★", 
    img: "/mallesh.jpg",
  },
  {
    name: "Vaishnavi Nampalli",
    location: "Delhi, India",
    review:
      "Very professional service. Hyderabad’s streets felt like a living museum – every corner had a story to tell! Highly recommended!",
    rating: "★★★★☆",
    img:'/ishu.jpg',
  },
  {
    name: "Ramya Karkala",
    location: "Gujrat, India",
    review:
      "Great customer support and affordable packages. Will definitely travel again with AJA Tourism.Exploring Golconda Fort at sunset was pure magic – a memory we’ll cherish forever!",
    rating: "★★★★★",
    img:'/ramya.jpg',
  },
  {
    name: "Naveen Dasari",
    location: "Kerala, India",
    review: 
      "Exploring the City of Pearls was a dream come true!",
      rating: "★★★★☆",
      img: '/naveen.jpg'
  },
  {
    name: "Chandana Munja",
    location: "Mumbai, India",
    review: "Exploring Charminar and the vibrant Laad Bazaar was unforgettable! AJA Tourism Corporation services were excellent throughout the trip.",
    rating: "★★★★☆",
    img: "/chandana.jpg",
  },
  {
    name: "Rohan Vadluri",
    location: "Goa, India",
    review: "Hyderabad’s Golconda Fort and its evening light show were mesmerizing! Thanks to AJA Tourism Corporation for smooth arrangements.",
    rating: "★★★★★",
    img: "/rohan.jpg",
  },
  {
    name: "Supriya Kunta",
    location: "Jaipur, India",
    review: "Walking through Chowmahalla Palace and tasting authentic Hyderabadi biryani was pure bliss! AJA Tourism made it hassle-free.",
    rating: "★★★★★",
    img: "/supriya.jpg",
  },
  {
    name: "Manish Maharana",
    location: "Delhi, India",
    review: "The grandeur of Qutb Shahi Tombs and serenity of Hussain Sagar Lake made Hyderabad magical! AJA Tourism handled everything perfectly.",
    rating: "★★★★★",
    img: "/manish.jpg",
  },
  {
    name: "Vaishnavi Moripoju",
    location: "Mumbai, India",
    review: "Hyderabad’s mix of history and modern vibes at Necklace Road was delightful! AJA Tourism Corporation ensured a comfortable journey.",
    rating: "★★★★☆",
    img: "/vaishnavi.jpg",
  },
  {
    name: "Devasena Medavaram",
    location: "Chennai, India",
    review: "Exploring Salar Jung Museum and its rare collections was a highlight! AJA Tourism’s service was top-notch.",
    rating: "★★★★☆",
    img: "/devsena.jpg",
  },
  {
    name: "Abdul Rahman Mohammed",
    location: "Kolkata, India",
    review: "Hyderabad’s rich heritage and the charm of Charminar left us in awe! AJA Tourism made the trip stress-free.",
    rating: "★★★★☆",
    img: "/abdul.jpg",
  },
  {
    name: "Arun Kumar Yellanki",
    location: "Pune, India",
    review: "The evening at Tank Bund and the view of Buddha Statue in Hussain Sagar was breathtaking! AJA Tourism provided excellent guidance.",
    rating: "★★★★★",
    img: "/arun.jpg",
  },
  {
    name: "Sri Pujita Nomula",
    location: "Bangalore, India",
       review: "Hyderabad’s Ramoji Film City was a fun-filled adventure! AJA Tourism Corporation made everything smooth and enjoyable.",
    rating: "★★★★★",
    img: "/pujita.jpg",
  },
  {
    name: "Mohammed Arshad",
    location: "Hyderabad, India", 
    review: "Hyderabad’s charm and AJA Tourism’s service made our trip unforgettable!",
    rating: "★★★★★", 
    img: "/arshad.jpg" ,
  },
  {
    name: "Mohammed Imran Aziz",
    location: "Hyderabad, India",
    review: "From Charminar to Golconda, every moment was magical thanks to AJA Tourism!",
       rating: "★★★★★", 
    img: "/imran.jpg",
  },
  {
    name: "Asma Khanam",
    location: "Saudi Arabia",
    review:
      "AJA Tourism planned our trip perfectly. Transport, and sightseeing were excellent. From the aroma of biryani to the grandeur of Charminar, Hyderabad stole our hearts!",
    rating: "★★★★★",
    img:'/asma.jpg',
  },
];



function Testimonials() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="test-page">
      {/* Hero Section */}
      <section className="test-hero">
        <div className="hero-overlay-1">
          <h1>AJA Tourism Corporation</h1>
          <p>What Our Happy Travelers Say</p>
          
          <button onClick={()=>navigate("/give-review")}>Give Your Review</button>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2>Customer Testimonials</h2>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div
             className="testimonial-card" key={index}>
              <img src={item.img} alt={item.name} className="pro-img" />
              <p className="review-t">“{item.review}”</p>
              <div className="rating-t">{item.rating}</div>
              <h4>{item.name}</h4>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </section>
  </div>
  </>
  );
}

export default Testimonials;
