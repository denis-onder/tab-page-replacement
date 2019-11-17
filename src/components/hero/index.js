import React from "react";
import Sidebar from "../layout/sidebar";
import Loader from "../layout/loader";
import Search from "../layout/search";
import Feed from "../feed";
import Settings from "../settings";
import "./styles.scss";

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: `${this.checkTime(new Date().getHours())}:${this.checkTime(
        new Date().getMinutes()
      )}`
    };
    setInterval(this.setTime, 500);
    this.setBackground();
  }

  componentDidMount() {
    this.checkForUser();
  }

  setTime = () => {
    const { time } = localStorage;
    const current = new Date();
    const current12 = current.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
    let hours = current.getHours();
    let minutes = current.getMinutes();
    hours = this.checkTime(hours);
    minutes = this.checkTime(minutes);
    if (time === "24") this.setState({ currentTime: `${hours}:${minutes}` });
    else this.setState({ currentTime: current12 });
  };

  setBackground = () => {
    // Unsplash API links
    const sources = [
      "https://source.unsplash.com/1920x1080/?nature",
      "https://source.unsplash.com/daily"
    ];
    const bgImg = new Image();
    bgImg.onload = () => {
      document.getElementById(
        "App"
      ).style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${bgImg.src})`;
      this.hideLoader();
    };
    bgImg.src = sources[Math.floor(Math.random() * sources.length)];
  };

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
        {this.state.exists ? (
          <React.Fragment>
            <Sidebar />
            <h1 className="hero_name">Hello, {this.state.name}</h1>
            <Search />
            <Feed />
            <Settings />
          </React.Fragment>
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
