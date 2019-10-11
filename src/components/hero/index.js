import React from "react";
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
    setInterval(() => {
      const current = new Date();
      const hours = current.getHours();
      let minutes = current.getMinutes();
      minutes = this.checkTime(minutes);
      this.setState({ currentTime: `${hours}:${minutes}` });
    }, 500);
  }

  checkTime = i => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  render() {
    return (
      <div id="hero">
        <h1 className="hero_name">Hello, undefined</h1>
        <h4>{this.state.currentTime}</h4>
      </div>
    );
  }
}
