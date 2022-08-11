import React from "react";
import twitter from "../assets/images/icons/Twitter.svg";
import mail from "../assets/images/icons/Mail.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import fb from "../assets/images/icons/facebook.svg";
import insta from "../assets/images/icons/Instagram.svg";
import github from "../assets/images/icons/github.svg";
import "../assets/css/Card.css";
import "../assets/css/index.css";
function GdaExos() {
  return (
    <div className="app">
      <div className="container">
      <div className="block-content">

        <article className="card">
          <header className="card__header">
            <div className="card-img">
              <img src="" alt="" />
            </div>
            <h2 className="card__title">Laura Smith</h2>
            <div className="card__infos">
              <p>Frontend Developer</p>
              <small>laurasmith.website</small>
              <div className="btn-container">
              <a href="#"><img src={mail} alt="Mail" /> Email</a>
              <a href="#"><img src={linkedin} alt="linkedin" /> LinkedIn</a></div>
            </div>
          </header>
          <div className="card__body">
            <div className="card__content">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="card__content">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
          </div>
          <footer className="card__footer">

              <a href="#"><img src={twitter} alt="Twitter" /></a>
              <a href="#"><img src={fb} alt="facebook" /></a>
              <a href="#"><img src={insta} alt="Instagram" /></a>
              <a href="#"><img src={github} alt="github" /></a>
          </footer>
        </article>
      </div>
      </div>
    </div>
  );
}
export default GdaExos;
