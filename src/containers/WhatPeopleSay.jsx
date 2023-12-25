import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/WhatPeopleSay.scss";
import Quote from "../assets/Quote.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
const quoteData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero in metus gravida dictum. Nullam quis purus sed arcu gravida gravida. Duis sit amet metus nec arcu convallis bibendum. Proin tincidunt eros a ligula pharetra, id fermentum velit vestibulum.",
    name: "John Doe",
    role: "Engineer",
  },
  {
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer pharetra, nisl quis consequat dictum, nisi arcu bibendum dolor, id gravida eros felis eu orci. Fusce laoreet pharetra justo, vel egestas urna eleifend a. Nulla facilisi. Vivamus vehicula varius nisi in venenatis.",
    name: "Jane Smith",
    role: "Designer",
  },
  {
    text: "Pellentesque vel semper ligula. Cras commodo velit vel viverra ullamcorper. Nam fermentum elit eget neque scelerisque, sed mattis erat rhoncus. Sed viverra auctor lectus, eu dapibus tortor condimentum a. Integer ut sem vitae orci feugiat sagittis. Ut condimentum odio vel libero malesuada, at dictum quam condimentum.",
    name: "Alice Johnson",
    role: "Developer",
  },
  {
    text: "Aliquam nec libero quis orci congue convallis a vitae tortor. Nulla facilisi. Ut vehicula tempor justo eu convallis. Integer feugiat magna vel ipsum rhoncus, nec luctus quam vestibulum. Quisque ultricies ex vel nunc faucibus, id semper purus congue. Curabitur et nunc vitae felis varius commodo.",
    name: "Bob Williams",
    role: "Manager",
  },
  {
    text: "Maecenas vitae felis at urna condimentum faucibus. Curabitur tincidunt facilisis velit. Sed sit amet ante at sem gravida commodo vitae vel urna. Quisque ac diam vel purus ultricies interdum a et ligula. Duis tincidunt metus in efficitur vestibulum.",
    name: "Eva Brown",
    role: "Artist",
  },
  {
    text: "Aenean ut tristique leo. Suspendisse vehicula felis vel sapien ultricies, at malesuada sem placerat. Vivamus euismod feugiat justo, non efficitur orci pellentesque quis. Ut ut nisl a neque suscipit vestibulum sit amet in nunc. Nam auctor nisi eget magna condimentum vulputate.",
    name: "Chris Lee",
    role: "Architect",
  },
];

const imageData = [
  { img: "", style: "color1" },
  { img: "", style: "color2" },
  { img: "", style: "color3" },
  { img: "", style: "color4" },
  { img: "", style: "color5" },
  { img: "", style: "color6" },
];

export default function WhatPeopleSay() {
  const imagesContainerRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);

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
    });
  };

  return (
    <div className="whatPeopleSayContainer">
      <div className="heading">
        <h1>What People Say About theHam</h1>
        <ShiftedDoubleLineBorder />
      </div>
      <div className="quote">
        <img src={Quote} alt="" className="quote" />
        <p>{quoteData[activeImg].text}</p>
      </div>
      <div className="peopleSlider">
        <div className="nameContainer">
          <p className="nameText">{quoteData[activeImg].name}</p>
          <p className="roleText">{quoteData[activeImg].role}</p>
        </div>
        <div className="imageSliderContainer">
          <img
            src=""
            alt=""
            className={`mainImg ${imageData[activeImg].style}`}
          />
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
                  className={`${content.style} ${
                    index === activeImg ? "active" : ""
                  }`}
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
