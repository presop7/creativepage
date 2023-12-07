export default function ServicesTab({ label, onClick, isActive }) {
  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
}
