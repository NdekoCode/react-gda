import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/App.css";
import "../assets/css/index.css";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="app">
          <div className="container">
            <h1>Page d'acceuil</h1>
          </div>

          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
