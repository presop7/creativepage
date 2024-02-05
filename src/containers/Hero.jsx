import React, { useState } from "react";
import Button from "../components/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Hero.scss";
import Preview1 from "../assets/heroPreview1.png";
import Preview2 from "../assets/heroPreview2.png";
import Preview3 from "../assets/heroPreview3.png";

const images = [Preview1, Preview2, Preview3];
const content = [
  {
    heading: "THE HAM IS",
    subheading: "WORDPRESS THEME",
    mainHeading: "WE ARE CREATIVE",
    description: "Just Buy And Enjoy These Awesome Features",
    buttonText1: "EXPLORE NOW",
    buttonText2: "PURCHASE NOW",
    styleHeroBackground: "gray",
    buttonHref1: "#about",
    buttonHref2: "#price",
  },
  {
    heading: "THE HAM IS",
    subheading: "WORDPRESS THEME",
    mainHeading: "WE ARE CREATIVE",
    description: "Just Buy And Enjoy These Awesome Features",
    buttonText1: "PURCHASE NOW",
    buttonText2: "EXPLORE NOW",
    styleHeroBackground: "blue",
    buttonHref1: "#price",
    buttonHref2: "#about",
  },
  {
    heading: "THE HAM IS",
    subheading: "WORDPRESS THEME",
    mainHeading: "WE ARE CREATIVE",
    description: "Just Buy And Enjoy These Awesome Features",
    buttonText1: "PURCHASE NOW",
    buttonText2: "EXPLORE NOW",
    styleHeroBackground: "red",
    buttonHref1: "#about",
    buttonHref2: "#price",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(
    (currentIndex + 1) % images.length
  );
  const [hoveredButton, setHoveredButton] = useState(null);

  const changeContent = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
    }
  };

  const handleHover = (direction) => {
    if (direction === "next") {
      setPreviewIndex((currentIndex + 1) % images.length);
      setHoveredButton("next");
    } else {
      const prevIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setPreviewIndex(prevIndex);
      setHoveredButton("prev");
    }
  };

  const handleMouseLeave = () => {
    if (hoveredButton) {
      setPreviewIndex(
        hoveredButton === "next"
          ? (currentIndex + images.length + 1) % images.length
          : (currentIndex + images.length - 1) % images.length
      );
    }
  };
  return (
    <div
      className={`heroContainer ${content[currentIndex].styleHeroBackground} `}
      id="home"
    >
      {/* Hero headings */}
      <div className="heroHeadings">
        <h2>
          {content[currentIndex].heading}{" "}
          <span>{content[currentIndex].subheading}</span>
        </h2>
        <h1>{content[currentIndex].mainHeading}</h1>
        <h3>{content[currentIndex].description}</h3>
      </div>
      {/* Hero Buttons */}
      <div className="heroButtonContainer">
        <a href={content[currentIndex].buttonHref1}>
          <Button
            css={"basicButton accentColor"}
            text={content[currentIndex].buttonText1}
          />
        </a>
        <a href={content[currentIndex].buttonHref2}>
          <Button
            css={"basicButton specialColor"}
            text={content[currentIndex].buttonText2}
          />
        </a>
      </div>
      {/* Hero controls */}
      <div className="heroBannerChangebutton">
        <img
          src={
            images[
              hoveredButton === "next"
                ? previewIndex
                : hoveredButton === "prev"
                ? (currentIndex + images.length - 1) % images.length
                : previewIndex
            ]
          }
          alt=""
          className="mainImage"
        />
        <div className="controlButtonsContainer">
          <button
            onClick={() => changeContent("prev")}
            onMouseEnter={() => handleHover("prev")}
            onMouseLeave={handleMouseLeave}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => changeContent("next")}
            onMouseEnter={() => handleHover("next")}
            onMouseLeave={handleMouseLeave}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
