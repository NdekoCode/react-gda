import React from "react";
// On importe l'element des liens mais aussi l'element de sortie des lient
import { Link, Outlet } from "react-router-dom";

export function Services() {
  return (
    <div className="container">
      <div className="services">
        <h1>Nos services</h1>
        <Link to="/services/development">Services de Developpement</Link>
        <Link to="/services/marketing">Services de Marketing</Link>
      </div>
      {/* Tous ce qui est imbriquer dans la route de "services" sera afficher dans la partie du composant Outlet */}
      <Outlet />
    </div>
  );
}
