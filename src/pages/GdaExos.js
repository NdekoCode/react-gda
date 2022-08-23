import React from "react";
import "../assets/css/index.css";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function GdaExos() {
  const params = useParams();
  // console.log(params.fullname);
  const { fullname } = params;
  console.log(fullname);
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="block-content">
          <Card fullname={fullname || "Laura Smith"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default GdaExos;
