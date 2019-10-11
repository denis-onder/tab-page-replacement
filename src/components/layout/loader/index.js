import React from "react";
import "./styles.scss";

export default function Loader() {
  return (
    <div id="loader">
      <span className="loader_outer_span">
        <span className="loader_inner_span"></span>
      </span>
    </div>
  );
}
