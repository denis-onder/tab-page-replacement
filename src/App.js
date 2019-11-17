import React from "react";
import Hero from "./components/hero";
import "./App.scss";

function App() {
  window.onkeydown = ({ target, keyCode }) => {
    const input = document.getElementsByClassName("search_box")[0];
    // If space (code 32) is pressed, focus the box
    if (keyCode === 32 && target !== input) {
      input.focus();
    }
    // If ESC (code 27) is pressed, reset the focus
    else if (keyCode === 27) input.blur();
  };
  return (
    <div id="App" className="App">
      <Hero />
    </div>
  );
}

export default App;
