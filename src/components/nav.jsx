import { useRef } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import "../styles/Nav.scss";
import navLogo from "../assets/theHamLogo.png";
export default function Nav() {
  const navRef = useRef();

  const OpenCloseNav = () => {
    navRef.current.classList.toggle("nav-menu");
  };

  return (
    <header>
      {/* Navigation Logo */}
      <div className="logo-container">
        <a href="#">
          <img src={navLogo} alt="Navigation Logo" />
        </a>
      </div>
      {/* Navigation links / Navigation menu */}
      <div className="nav-links" ref={navRef}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Service</a>
        <a href="#">Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Blog</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
        <button className="nav-close-btn" onClick={OpenCloseNav}>
          <FaTimes />
        </button>
        <button className="nav-btn search-btn">
          <FaSearch />
        </button>
      </div>
      {/* Navigation buttons */}
      <div className="buttons-container">
        <button className="nav-btn nav-menu-btn" onClick={OpenCloseNav}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
