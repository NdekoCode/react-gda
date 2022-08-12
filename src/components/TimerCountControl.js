import React, { Component } from "react";
import arrowUp from "../assets/images/icons/arrow-up.svg";
import arrowDown from "../assets/images/icons/arrow-down.svg";
export class TimerCountControl extends Component {
  render() {
    return (
      <div className="length-control">
        <div id={this.props.titleID}>{this.props.title}</div>
        <button
          className="btn-level"
          id={this.props.minID}
          onClick={this.props.onClick}
          value="-"
        >
          <img src={arrowDown} alt="arrowDown" width={25} />
        </button>
        <div className="btn-level" id={this.props.lengthID}>
          {this.props.length}
        </div>
        <button
          className="btn-level"
          id={this.props.addID}
          onClick={this.props.onClick}
          value="+"
        >
          <img src={arrowUp} alt="arrowUp" width={25} />
        </button>
      </div>
    );
  }
}
