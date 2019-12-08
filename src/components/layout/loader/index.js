import React from "react";
import "./styles.scss";

export default function Loader() {
  return (
    <div
      id="loader"
      style={{ backgroundColor: localStorage.getItem("color") || "#006CA1" }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
