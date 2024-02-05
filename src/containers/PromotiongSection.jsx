import Tick from "../assets/tickMark.png";
import Image from "../assets/imageMaskPromoSection.png";
import "../styles/PromotingSection.scss";
import Button from "../components/Button";

export default function PromotingSection() {
  const featureData = [
    { img: Tick, text: "Lorem, ipsum dolor." },
    { img: Tick, text: "Iste, facere iusto!" },
    { img: Tick, text: "Exercitationem, et sequi." },
    { img: Tick, text: "Est, cupiditate repellendus." },
    { img: Tick, text: "Distinctio, molestias aspernatur?" },
    { img: Tick, text: "Mollitia, architecto molestiae." },
  ];

  return (
    <div className="promotingSection" id="skills">
      <div className="heading">
        <h1 className="whiteHeading">THIS IS NOT ONLY THEME</h1>
        <h1 className="accentHeading">IT'S ALSO CLEAN AND CREATIVE DESIGN</h1>
      </div>
      <div className="content">
        <div className="divimg">
          <img src={Image} alt="" />
        </div>
        <div className="features">
          {featureData.map((content, index) => (
            <div className="feature" key={index}>
              <img src={content.img} alt="" />
              <p>{content.text}</p>
            </div>
          ))}
          <a href="#price">
            <Button css={"basicButton accentColor"} text={"PURCHASE NOW"} />
          </a>
        </div>
      </div>
    </div>
  );
}
