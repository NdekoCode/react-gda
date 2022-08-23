import React from "react";

import profile from "../assets/images/profile.png";
import mail from "../assets/images/icons/Mail.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
function CardHeader({ fullname }) {
  return (
    <header className="card__header">
      <div className="card__img">
        <img src={profile} alt="" />
      </div>
      <div className="card__infos">
        <h2 className="card__title title">{fullname}</h2>
        <p className="profile-job">Frontend Developer</p>
        <small>laurasmith.website</small>
        <div className="btn-container">
          <a href="#" className="btn btn-light">
            <img src={mail} alt="Mail" /> Email
          </a>
          <a href="#" className="btn btn-blue">
            <img src={linkedin} alt="linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
export default CardHeader;
