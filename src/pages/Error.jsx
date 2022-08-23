import React from "react";
import List from "../components/List";
import "../assets/css/index.css";
import Header from "../components/Header";
function Error() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h1>Page d"erreur</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum
          ducimus illum perferendis accusamus ex atque delectus iste, alias
          blanditiis accusantium nostrum illo, consequatur recusandae at
          nesciunt laboriosam, odio nulla?
        </p>
        <List />
      </div>
    </React.Fragment>
  );
}
export default Error;
