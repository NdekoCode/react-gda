import React, { Component } from "react";
import { Timer } from "./Timer";
import "../assets/css/Pomodoro.css";

export class Pomodoro extends Component {
  render() {
    return (
      <div className="pomodoro-container ">
        <div id="container">
          <Timer />
        </div>
      </div>
    );
  }
}
