import React from "react";
import "./styles.scss";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleKeyPress = ({ keyCode }) => {
    const generateQuery = param =>
      `https://duckduckgo.com/?q=${param}&t=canonical&ia=web`;
    if (keyCode === 13) {
      window.open(generateQuery(this.state.input.split(" ").join("+")));
    }
  };

  render() {
    return (
      <div id="search">
        <input
          type="text"
          name="input"
          className="search_box"
          placeholder="DuckDuckGo Search:"
          onKeyDown={this.handleKeyPress}
          onChange={this.handleChange}
          value={this.state.input}
        />
      </div>
    );
  }
}
