import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/WhatPeopleSay.scss";
import Quote from "../assets/Quote.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
export default function WhatPeopleSay() {
  const imagesContainerRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);

  const imageData = [
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
  ];

  const prevSlide = () => {
    setActiveImg((prevIndex) => {
      const newIndex = prevIndex === 0 ? imageData.length - 1 : prevIndex - 1;
      scrollActiveIntoView(newIndex);
      return newIndex;
    });
  };

  const nextSlide = () => {
    setActiveImg((prevIndex) => {
      const newIndex = (prevIndex + 1) % imageData.length;
      scrollActiveIntoView(newIndex);
      return newIndex;
    });
  };

  const scrollActiveIntoView = (index) => {
    const images = imagesContainerRef.current.childNodes;
    images[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    }); /* Adjusted block value */
  };

  return (
    <div className="whatPeopleSayContainer">
      <div className="heading">
        <h1>What People Say About theHam</h1>
        <ShiftedDoubleLineBorder />
      </div>
      <div className="quote">
        <img src={Quote} alt="" className="quote" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minus et
          non eveniet maxime deleniti, accusantium earum ipsam voluptatibus!
          Dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          debitis! Cum, dolore?
        </p>
      </div>
      <div className="peopleSlider">
        <div className="nameContainer">
          <p className="nameText">Name</p>
          <p className="roleText">Ux Designer</p>
        </div>
        <div className="imageSliderContainer">
          <img src="" alt="" className="mainImg" />
          <div className="imgSlider">
            <button onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <div className="imagesContainer" ref={imagesContainerRef}>
              {imageData.map((content, index) => (
                <img
                  src={content.img}
                  alt=""
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={index === activeImg ? "active" : ""}
                />
              ))}
            </div>

            <button onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
