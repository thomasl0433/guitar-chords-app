import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Button } from "../Button";

// using class component is ideal for using State
export default class NavBar extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">
          Guitar Chord Dictionary
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
        <Button>Sign Up</Button>
      </nav>
    );
  }
}
