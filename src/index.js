import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import GdaExos from "./pages/GdaExos";
import { Pomodoro } from "./components/Pomodoro";
import "./assets/css/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pomodoro />);
