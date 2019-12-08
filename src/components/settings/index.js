import React from "react";
import "./styles.scss";

export default function Settings() {
  const reset = e => {
    const target = e.target.getAttribute("data-option");
    localStorage.removeItem(target);
    window.location.reload();
  };
  const changeTimeFormat = e => {
    const target = e.target.getAttribute("data-option");
    let timeFormat = localStorage.getItem(target);
    if (timeFormat === "24") timeFormat = "12";
    else timeFormat = "24";
    localStorage.setItem(target, timeFormat);
  };
  // Default time format should be the 12 hour format
  let getTimeFormat = localStorage.getItem("time") || "12";
  // Set loader background color
  const setColor = e => {
    if (e.keyCode !== 13) return;
    localStorage.setItem("color", e.target.value);
  };

  return (
    <div id="settings_window" className="window" style={{ display: "none" }}>
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
      <div className="settings_option">
        <p className="settings_option_name">Clock format:</p>
        <button
          className="settings_option_action"
          data-option="time"
          onClick={changeTimeFormat}
        >
          {getTimeFormat}
        </button>
      </div>
      <div className="settings_option">
        <p className="settings_option_name">Set loader background color:</p>
        <input
          type="text"
          className="settings_option_action"
          onKeyDown={setColor}
          placeholder={localStorage.getItem("color") || ""}
        />
      </div>
    </div>
  );
}
