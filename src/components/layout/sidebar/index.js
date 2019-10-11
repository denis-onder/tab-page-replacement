import React from "react";
import "./styles.scss";

const activeLink = e => {
  const elements = document.getElementsByClassName("sidebar_list_item");
  const target = document.getElementById(e.currentTarget.id);
  target.classList.toggle("active");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== target) elements[i].classList.remove("active");
  }
};

export default function Sidebar() {
  return (
    <div id="sidebar">
      <ul className="sidebar_list">
        <a href="https://github.com" className="sidebar_list_link">
          <li className="sidebar_list_item">
            <i className="sidebar_list_item_icon fab fa-github"></i>
          </li>
        </a>
        <a href="https://stackoverflow.com/" className="sidebar_list_link">
          <li className="sidebar_list_item">
            <i className="sidebar_list_item_icon fab fa-stack-overflow"></i>
          </li>
        </a>
        <a href="https://dev.to" className="sidebar_list_link">
          <li className="sidebar_list_item">
            <i className="sidebar_list_item_icon fab fa-dev"></i>
          </li>
        </a>
        <a href="https://linkedin.com" className="sidebar_list_link">
          <li className="sidebar_list_item">
            <i className="sidebar_list_item_icon fab fa-linkedin"></i>
          </li>
        </a>
        <li id="feed" className="sidebar_list_item" onClick={activeLink}>
          <i className="sidebar_list_item_icon fas fa-rss-square"></i>
        </li>
        <li id="settings" className="sidebar_list_item" onClick={activeLink}>
          <i className="sidebar_list_item_icon fas fa-cogs"></i>
        </li>
      </ul>
    </div>
  );
}
