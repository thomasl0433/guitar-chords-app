import React from "react";
import { MenuItems } from "./MenuItems";

// using class component is ideal for using State
export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                    {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
