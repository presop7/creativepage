export default function ServicesTab({ label, onClick, isActive }) {
  return (
    <div className="tabContainer">
      <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
        <p>{label}</p>
      </div>
      <div className="triangle"></div>
    </div>
  );
}
