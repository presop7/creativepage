import { useRef } from "react";
import {FaTimes, FaBars} from "react-icons/fa"
import "../styles/Nav.scss"

export default function Nav() {
    const navRef = useRef()

    const OpenCloseNav = () => {
        navRef.current.classList.toggle("nav-menu")
    }
   
    return(
        <>
        <header>
            {/* Navigation Logo */}
            <div className="logo-container">
                <a href="#">
                    <img src="" alt="Navigation Logo" />
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
                <button className="nav-btn" onClick={OpenCloseNav}>
                    <FaTimes/>
                </button>
            </div>
            {/* Navigation buttons */}
            <button className="nav-btn search-btn">
                <img src="" alt="Search Icon" />
            </button>

            <button className="nav-close-btn" onClick={OpenCloseNav}>
                <FaBars/>
            </button>
        </header>
        </>
    )
}