import React from "react";
import "../styles/AboutTab.scss";
const Tab = ({ label, onClick, isActive }) => (
  <div className={`tab ${isActive ? "acitve" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default Tab;
