export default function ServicesTab({ label, onClick, isActive }) {
  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      <p>{label}</p>
      <div className="triangle"></div>
    </div>
  );
}
