import React from "react";

import "./css/experience/experienceCard.css";
import "./css/experience/workExperience.css";
import "./css/experience/podcast.css";
import fookreyweb from "../images/fookreyweb.png";
import chathook from "../images/chathook.png";
import ekeytab from "../images/notebook.svg";
function Project() {
  return (
    <div id="experience">
      <div className="experience-container">
        <div>
          <h1 className="experience-heading">Experiences</h1>
          <div className="experience-cards-div">
            <div className="experience-card">
              <div
                className="experience-banner"
                style={{background: 'rgb(220, 200, 0)'}}
              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">React-JS</h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  className="experience-roundedimg"
                  src={fookreyweb}
                  alt="React-JS"
                />
              </div>
              <div className="experience-text-details">
                <h5 className="experience-text-role">Social Media App</h5>
                <h5 className="experience-text-date">March - 2021</h5>
                <p className="subTitle experience-text-desc">
                  Social Media Clone With Database
                </p>
                <ul>
                  <li className="subTitle">CRUD Operation with Post and comments</li>
                  <li className="subTitle">User Registeration and Profile</li>
                  <li className="subTitle">One-to-One Chat</li>
                  <li className="subTitle">Deployed final product</li>
                  <a href="http:/fookreywebs.epizy.com">Go to Project</a>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div
                className="experience-banner"
                style={{background: '#36aaff'}}
              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">React-Firebase</h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  className="experience-roundedimg"
                  src={chathook}
                  alt="Python"
                />
              </div>
              <div className="experience-text-details">
                <h5 className="experience-text-role">Chathook</h5>
                <h5 className="experience-text-date">November - 2021</h5>
                <p className="subTitle experience-text-desc">
                  A Real time Chat Application for Group chat With Google Authentication.
                </p>
                <ul>
                  <li className="subTitle">Sign in/up with Google</li>
                  <li className="subTitle">Real Time Database provide by FIREBASE🔥</li>
                  <li className="subTitle">Group Chat</li>
                  <li className="subTitle">Deployed final product</li>
                  <a href="https://chathook-f2855.web.app/">Go to Project</a>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div
                className="experience-banner"
                style={{background: 'rgb(30, 121, 211)'}}              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">JavaScript-php</h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  className="experience-roundedimg"
                  src={ekeytab}
                  alt="React - Redux"
                />
              </div>
              <div className="experience-text-details">
                <h5 className="experience-text-role">E-book Platform</h5>
                <h5 className="experience-text-date">March - 2022</h5>
                <p className="subTitle experience-text-desc">
                  A application made similar like original Google E-book using
                  Google Api.
                </p>
                <ul>
                <li className="subTitle">Free e-Books Search and Download</li>
                  <li className="subTitle">User Registeration and Profile</li>
                  <li className="subTitle">Bookmark and Save Searched books</li>
                  <li className="subTitle">Deployed final product</li>
                  {/* <a href="http:/fookreywebs.epizy.com">Go to Project</a> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
