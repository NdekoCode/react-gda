import React from "react";
import "../assets/css/index.css";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
function GdaExos() {
  const { fullname } = useParams();
  console.log(fullname);
  return (
    <div className="container">
      <div className="block-content">
        <Card fullname={fullname || "Laura Smith"} />
      </div>
    </div>
  );
}
export default GdaExos;
