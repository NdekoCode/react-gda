import React from "react";
import Link from "./Link";
import NavBar from "./NavBar";
import logo from "../logo.svg";
import { Routes, Route } from "react-router-dom";
import Link from "react-router-dom";
function Header() {
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
      name: "About",
      href: "/about",
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
        <a href="#" className="App-logo">
          <img src={logo} alt="Logo" />
        </a>
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
