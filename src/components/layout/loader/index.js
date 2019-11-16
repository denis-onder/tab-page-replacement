import React from "react";
import "./styles.scss";

export default function Loader() {
  return (
    <div id="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
