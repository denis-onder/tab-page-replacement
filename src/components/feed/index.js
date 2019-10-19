import React from "react";
import "./styles.scss";
export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.checkForFeed = this.checkForFeed.bind(this);
  }

  componentDidMount() {
    this.checkForFeed();
  }

  async checkForFeed() {
    const { feed } = localStorage;
    if (feed) {
      const res = await fetch(
        `https://www.reddit.com/r/${feed}/new.json?sort=new`
      );
      const { data } = await res.json();
      this.setState({ data: data.children });
      return this.setState({ exists: true });
    }
    return this.setState({ exists: false });
  }

  handleInput = e => {
    if (e.keyCode === 13) {
      localStorage.setItem("feed", e.target.value);
      this.checkForFeed();
    }
  };

  fixBrokenImages = () => {
    Array.from(document.getElementsByClassName("feed_post_img")).forEach(
      img => {
        const attr = img.getAttribute("src");
        if (attr === "self" || attr === "" || attr === "nsfw") {
          img.setAttribute(
            "src",
            "http://www.exceptnothing.com/wp-content/uploads/2014/11/Reddit-Logo.png"
          );
        }
      }
    );
  };

  render() {
    return (
      <div id="feed_window" className="window" style={{ display: "none" }}>
        {this.state.exists ? (
          <div className="feed_output" onLoad={this.fixBrokenImages}>
            {this.state.data.map(({ data: post }, i) => (
              <div className="feed_post" key={i}>
                <img
                  width="100px"
                  height="100px"
                  src={
                    post.thumbnail ||
                    "http://www.exceptnothing.com/wp-content/uploads/2014/11/Reddit-Logo.png"
                  }
                  alt=""
                  className="feed_post_img"
                />
                <div className="feed_post_info">
                  <a
                    href={`https://reddit.com/u/${post.author}`}
                    className="feed_post_info_tag"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.author}
                  </a>
                  <div
                    className="feed_post_info_title"
                    onClick={() =>
                      window.open(`https://reddit.com${post.permalink}`)
                    }
                  >
                    {post.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <React.Fragment>
            <h1>Reddit Feed:</h1>
            <input
              className="feed_input"
              type="text"
              placeholder="Subreddit Name:"
              onKeyDown={this.handleInput}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
