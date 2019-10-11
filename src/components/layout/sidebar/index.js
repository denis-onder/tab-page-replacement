import React from "react";
import "./styles.scss";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <ul className="sidebar_list">
        <li className="sidebar_list_item">
          <i className="sidebar_list_item_icon fab fa-github"></i>
        </li>
        <li className="sidebar_list_item">
          <i className="sidebar_list_item_icon fab fa-stack-overflow"></i>
        </li>
        <li className="sidebar_list_item">
          <i className="sidebar_list_item_icon fab fa-dev"></i>
        </li>
        <li className="sidebar_list_item">
          <i className="sidebar_list_item_icon fab fa-linkedin"></i>
        </li>
        <li className="sidebar_list_item">
          <i className="sidebar_list_item_icon fas fa-rss-square"></i>
        </li>
        <li className="sidebar_list_item">
          <i className="sidebar_list_item_icon fas fa-cogs"></i>
        </li>
      </ul>
    </div>
  );
}
