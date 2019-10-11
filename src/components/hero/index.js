import React from "react";
import Sidebar from "../layout/sidebar";
import Loader from "../layout/loader";
import "./styles.scss";

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: `${new Date().getHours()}:${this.checkTime(
        new Date().getMinutes()
      )}`
    };
  }

  componentDidMount() {
    this.checkForUser();
    setInterval(() => {
      const current = new Date();
      const hours = current.getHours();
      let minutes = current.getMinutes();
      minutes = this.checkTime(minutes);
      this.setState({ currentTime: `${hours}:${minutes}` });
    }, 500);
    setTimeout(() => {
      this.hideLoader();
    }, 3000);
  }

  checkTime = i => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  checkForUser = () => {
    const { name } = localStorage;
    if (name) {
      this.setState({ exists: true });
      this.setState({ name });
      return;
    }
    return this.setState({ exists: false });
  };

  handleInput = e => {
    if (e.keyCode === 13) {
      localStorage.setItem("name", e.target.value);
      this.checkForUser();
    }
  };

  hideLoader = () => (document.getElementById("loader").style.display = "none");

  render() {
    return (
      <div id="hero">
        <Loader />
        <Sidebar />
        {this.state.exists ? (
          <h1 className="hero_name">Hello, {this.state.name}</h1>
        ) : (
          <React.Fragment>
            <h3 className="hero_welcome">Hello!</h3>
            <input
              className="hero_name_input"
              type="text"
              placeholder="What is your name?"
              onKeyDown={this.handleInput}
            />
          </React.Fragment>
        )}
        <h4 className="hero_clock">{this.state.currentTime}</h4>
      </div>
    );
  }
}
