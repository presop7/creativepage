import "../styles/FeaturesCardsContainer.scss";
import FeatureCard from "../components/FeatureCard";
import leaf from "../assets/leafIcon.png";
import note from "../assets/note.png";
import magnifier from "../assets/magnifier.png";
import sandClock from "../assets/sandClock.png";
import laptop from "../assets/laptopicon.png";
import tools from "../assets/tools.png";
import bulb from "../assets/bulb.png";
import telegramPlane from "../assets/telegramPlane.png";
import idIcon from "../assets/idIcon.png";
import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";

const featuresData = [
  {
    i: leaf,
    h: "Retina Ready",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: note,
    h: "Creative Blog Style",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: magnifier,
    h: " Icon Fonts",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: sandClock,
    h: "Parallax Effects",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: laptop,
    h: "Amazing Interface",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: tools,
    h: "SEO Optimized",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: bulb,
    h: "Creative Solutions",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: telegramPlane,
    h: "Mega Menus",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
  {
    i: idIcon,
    h: "Custom Background",
    d: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?",
  },
];

export default function FeaturesCardsContainer() {
  return (
    <>
      <div className="featureCardsContainer">
        <h1>Creative Amazing Features</h1>
        <div className="lines">
          <ShiftedDoubleLineBorder />
        </div>
        <div className="fcwrapper">
          {featuresData.map((item, i) => {
            return (
              <FeatureCard
                key={i}
                img={item.i}
                heading={item.h}
                description={item.d}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
