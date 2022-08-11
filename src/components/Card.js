import React from "react";
import "../assets/css/Card.css";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
function Card() {
  return (
    <article className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </article>
  );
}
export default Card;
