import React from "react";
import "../assets/css/index.css";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
function GdaExos() {
  const params = useParams();
  // console.log(params.fullname);
  const { fullname } = params;
  console.log(fullname);
  return (
    <div className="app">
      <div className="container">
        <div className="block-content">
          <Card fullname={fullname || "Laura Smith"} />
        </div>
      </div>
    </div>
  );
}
export default GdaExos;
