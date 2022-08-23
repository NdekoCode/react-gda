import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";
import "../assets/css/App.css";
import "../assets/css/index.css";
function Home() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum
        ducimus illum perferendis accusamus ex atque delectus iste, alias
        blanditiis accusantium nostrum illo, consequatur recusandae at nesciunt
        laboriosam, odio nulla?
      </p>
      <List />
    </div>
  );
}
export default Home;
