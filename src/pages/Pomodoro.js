import React, { Component } from "react";
import { Timer } from "../components/Timer";
import "../assets/css/Pomodoro.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export class Pomodoro extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="pomodoro-container ">
          <div id="container">
            <Timer />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
