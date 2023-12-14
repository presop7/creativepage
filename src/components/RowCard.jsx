import "../styles/RowCard.scss";

export default function RowCard({ img, number, description, cardClass }) {
  return (
    <div className={cardClass}>
      <img src={img} alt="" />
      <p>{number}</p>
      <p>{description}</p>
    </div>
  );
}
