import React from "react";

import twitter from "../assets/images/icons/Twitter.svg";
import fb from "../assets/images/icons/facebook.svg";
import insta from "../assets/images/icons/Instagram.svg";
import github from "../assets/images/icons/github.svg";
function CardFooter() {
  return (
    <footer className="card__footer">
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="#">
        <img src={fb} alt="facebook" />
      </a>
      <a href="#">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="#">
        <img src={github} alt="github" />
      </a>
    </footer>
  );
}
export default CardFooter;
