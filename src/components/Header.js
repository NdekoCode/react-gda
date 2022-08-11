import React from "react";
import Link from "./Link";
import NavBar from "./NavBar";
import logo from "../logo.svg";
function Header() {
  const links = [
    {
      classLink: "",
      name: "Home",
      href: "#",
    },
    {
      classLink: "",
      name: "Services",
      href: "#",
    },
    {
      classLink: "",
      name: "About",
      href: "#",
    },
    {
      classLink: "",
      name: "Contact",
      href: "#",
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="App-logo">
          <img src={logo} alt="Logo" />
        </a>
        <NavBar className="navbar">
          {links.map((link, index) => (
            <Link key={index} linkDetail={link} />
          ))}
        </NavBar>
      </div>
    </header>
  );
}
export default Header;
