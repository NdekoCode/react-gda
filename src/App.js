import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/index.css";
import GdaExos from "./pages/GdaExos";
import { Pomodoro } from "./pages/Pomodoro";
import Error from "./pages/Error";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/user/:fullname" element={<GdaExos />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
