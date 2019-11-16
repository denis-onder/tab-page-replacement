import React from "react";
import Hero from "./components/hero";
import "./App.scss";

function App() {
  window.onkeydown = ({ target, keyCode }) => {
    const input = document.getElementsByClassName("search_box")[0];
    if (keyCode === 32 && target !== input) {
      input.value = "";
      input.focus();
    }
  };
  return (
    <div id="App" className="App">
      <Hero />
    </div>
  );
}

export default App;
