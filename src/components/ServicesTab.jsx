export default function ServicesTab({ label, onClick, isActive }) {
  return (
    <div className="tabContainer">
      <div
        className={` serviceTab ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <p>{label}</p>
      </div>
      <div className="triangle"></div>
    </div>
  );
}
