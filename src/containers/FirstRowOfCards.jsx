import "../styles/FirstRowOfCards.scss";
import RowCard from "../components/RowCard";
import img1 from "../assets/CardImg1.png";
import img2 from "../assets/CardImg2.png";
import img3 from "../assets/CardImg3.png";
import img4 from "../assets/CardImg4.png";

export default function FirstRowOfCards() {
  return (
    <div className="cardsContainer">
      <RowCard
        img={img1}
        description="DIFFERENT THEME OPTION"
        cardClass="card cardSecondaryColor"
      />
      <RowCard
        img={img2}
        description="FULLY CUSTOMIZABLE"
        cardClass="card cardAccentColor"
      />
      <RowCard
        img={img3}
        description="UNLIMITED SUPPORT"
        cardClass="card cardSecondaryColor"
      />
      <RowCard
        img={img4}
        description="RESPONSIVE ALL DEVICE"
        cardClass="card cardAccentColor"
      />
    </div>
  );
}
