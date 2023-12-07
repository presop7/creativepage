import "../styles/FeatureCard.scss";

export default function FeatureCard({ img, heading, description }) {
  return (
    <div className="featureCardContainer">
      <div className="heading">
        <img src={img} alt="" />
        <h3>{heading}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}
