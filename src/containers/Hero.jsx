import Button from "../components/Button";
import "../styles/Hero.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="heroContainer">
      {/* Hero headings */}
      <div className="heroHeadings">
        <h2>
          THE HAM IS <span>WORDPRESS THEME</span>
        </h2>
        <h1>WE ARE CREATIVE</h1>
        <h3>Just Buy And Enjoy These Awesome Features</h3>
      </div>
      {/* Hero Buttons */}
      <div className="heroButtonContainer">
        <Button style={"basicButton accentColor"} text={"EXPLORE NOW"} />
        <Button style={"basicButton specialColor"} text={"PURCHASE NOW"} />
        {/* <button>PURCHASE NOW</button> */}
      </div>
      {/* Hero controls */}
      <div className="heroBannerChangebutton">
        <img src="#" alt="Next Hero Banner" className="mainImage" />
        <div className="controlButtonsContainer">
          <button>
            {/* <img src="#" alt="#" />? */}
            <FaChevronLeft />
          </button>
          <button>
            {/* <img src="#" alt="#" />? */}
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
