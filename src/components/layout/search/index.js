import React from "react";
import "./styles.scss";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      input: ""
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleKeyPress = ({ keyCode }) => {
    // If input resolves into an actual website URL, instead of searching, open the URL
    // FIXME: This approach only works with relative URLs.
    if (keyCode === 13) {
      const { pattern, input: param } = this.state;
      window.open(
        pattern.test(param)
          ? `https://${param.replace(" ", "")}`
          : `https://duckduckgo.com/?q=${param
              .split(" ")
              .join("+")}&t=canonical&ia=web`
      );
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
