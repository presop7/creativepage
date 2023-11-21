import "../styles/RowCard.scss";

export default function RowCard({ img, description, cardClass }) {
  return (
    <div className={cardClass}>
      <img src={img} alt="" />
      <p>{description}</p>
    </div>
  );
}
