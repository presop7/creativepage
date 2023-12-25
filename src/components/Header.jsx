import { useRef } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import "../styles/Nav.scss";
import navLogo from "../assets/theHamLogo.png";
export default function Nav() {
  const navRef = useRef();

  const OpenCloseNav = () => {
    navRef.current.classList.toggle("nav-menu");
  };
  const CloseNav = () => {
    navRef.current.classList.remove("nav-menu");
  };

  return (
    <header>
      {/* Navigation Logo */}
      <div className="logo-container">
        <a href="hero">
          <img src={navLogo} alt="Navigation Logo" />
        </a>
      </div>
      {/* Navigation links / Navigation menu */}
      <div className="nav-links" ref={navRef}>
        <a href="#home" onClick={CloseNav}>
          Home
        </a>
        <a href="#about" onClick={CloseNav}>
          About
        </a>
        <a href="#skills" onClick={CloseNav}>
          Skills
        </a>
        <a href="#service" onClick={CloseNav}>
          Service
        </a>
        <a href="#work" onClick={CloseNav}>
          Work
        </a>
        <a href="#testimonials" onClick={CloseNav}>
          Testimonials
        </a>
        <a href="#blog" onClick={CloseNav}>
          Blog
        </a>
        <a href="#team" onClick={CloseNav}>
          Team
        </a>
        <a href="#contact" onClick={CloseNav}>
          Contact
        </a>
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
