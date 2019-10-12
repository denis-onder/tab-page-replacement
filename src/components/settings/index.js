import React from "react";
import "./styles.scss";

export default function Settings() {
  const reset = e => {
    const target = e.target.getAttribute("data-option");
    localStorage.removeItem(target);
    window.location.reload();
  };
  return (
    <div id="settings_window" style={{ display: "none" }}>
      <h1 className="settings_title">Settings:</h1>
      <div className="settings_option">
        <p className="settings_option_name">Reset your name:</p>
        <button
          className="settings_option_action"
          data-option="name"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <div className="settings_option">
        <p className="settings_option_name">Reset your feed:</p>
        <button
          className="settings_option_action"
          data-option="feed"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
