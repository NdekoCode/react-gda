import React from "react";
import NavBar from "./NavBar";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
export function Header() {
  const links = [
    {
      classLink: "",
      name: "Home",
      href: "/",
    },
    {
      classLink: "",
      name: "Services",
      href: "/services",
    },
    {
      classLink: "",
      name: "Météo",
      href: "/meteo",
    },
    {
      classLink: "",
      name: "Blog",
      href: "/blog",
    },
    {
      classLink: "",
      name: "Pomodoro",
      href: "/pomodoro",
    },
    {
      classLink: "",
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <Link to="#" className="App-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <NavBar className="navbar">
          {links.map(({ href, name }, index) => (
            <Link key={index} to={href}>
              {name}
            </Link>
          ))}
        </NavBar>
      </div>
    </header>
  );
}
export default Header;
