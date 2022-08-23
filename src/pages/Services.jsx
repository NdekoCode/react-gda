import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Services() {
  return (
    <div className="container">
      <div className="services">
        <h1>Nos services</h1>
        <Link to="/services/development">Services de Developpement</Link>
        <Link to="/services/marketing">Services de Marketing</Link>
      </div>
      <Outlet />
    </div>
  );
}
