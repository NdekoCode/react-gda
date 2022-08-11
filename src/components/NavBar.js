import React from "react";
import Button from "./Button";
function NavBar({ children, className }) {
  const authLinks = [
    {
      classLink: "btn",
      name: "Login",
      href: "#",
    },
    {
      classLink: "btn",
      name: "Sign In",
      href: "#",
    },
  ];
  return (
    <React.Fragment>
      <nav className={className}>{children}</nav>
      <nav className="auth-nav">
        {authLinks.map((link, index) => (
          <Button
            item="link"
            key={index}
            className={link.classLink}
            linkDetail={link}
          />
        ))}
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
