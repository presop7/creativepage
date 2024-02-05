import RowCard from "../components/RowCard";
import suitcase from "../assets/suitcase.png";
import user from "../assets/user.png";
import cart from "../assets/shoppingCart.png";
import locationImg from "../assets/location.png";
import "../styles/SecondRowOfCards.scss";

export default function SecondRowOfCards() {
  const cardData = [
    {
      img: { suitcase },
      number: "4609",
      description: "Works",
    },
    {
      img: { user },
      number: "3470",
      description: "Customers",
    },
    {
      img: { cart },
      number: "2908",
      description: "Purchase",
    },
    {
      img: { locationImg },
      number: "1908",
      description: "Office",
    },
  ];
  return (
    <div className="secondRowOfCards">
      {cardData.map((content, index) => (
        <RowCard
          key={index}
          img={content.img}
          number={content.number}
          description={content.description}
          cardClass={"card"}
        />
      ))}
    </div>
  );
}
