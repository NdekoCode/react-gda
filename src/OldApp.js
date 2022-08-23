import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/index.css";
function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="container">
          <Home />
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default App;
