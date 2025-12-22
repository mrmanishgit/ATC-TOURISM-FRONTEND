import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">AJA Tourism</h2>

      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/packages">Packages</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login" className="login-btn">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;