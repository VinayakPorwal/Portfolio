import React from "react";

import "./css/experience/experienceCard.css";
import "./css/experience/workExperience.css";
import "./css/experience/podcast.css";
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
                style={{background: 'rgb(80, 53, 69)'}}
              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">React-JS</h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  className="experience-roundedimg"
                  src="/static/media/girl.64442d73.png"
                  alt="React-JS"
                />
              </div>
              <div className="experience-text-details">
                <h5 className="experience-text-role">COVID-19 Tracker</h5>
                <h5 className="experience-text-date">December - 2021</h5>
                <p className="subTitle experience-text-desc">
                  Live COVID-19 situation tracker for live scenario
                </p>
                <ul>
                  <li className="subTitle">Creating React APP</li>
                  <li className="subTitle">Generating API</li>
                  <li className="subTitle">Calling API</li>
                  <li className="subTitle">Deploying final product</li>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div
                className="experience-banner"
                style={{background: 'rgb(214, 211, 211)'}}
              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">Python</h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  className="experience-roundedimg"
                  src="/static/media/space.617caae3.png"
                  alt="Python"
                />
              </div>
              <div className="experience-text-details">
                <h5 className="experience-text-role">Space Invader</h5>
                <h5 className="experience-text-date">January - 2022</h5>
                <p className="subTitle experience-text-desc">
                  A time buster Game/Software to play when you are bored using
                  PyGame.
                </p>
                <ul></ul>
              </div>
            </div>
            <div className="experience-card">
              <div
                className="experience-banner"
                style={{background: 'rgb(28, 220, 100)'}}              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">React - Redux</h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  className="experience-roundedimg"
                  src="/static/media/spotify.2b37ba76.png"
                  alt="React - Redux"
                />
              </div>
              <div className="experience-text-details">
                <h5 className="experience-text-role">Spotify - Clone</h5>
                <h5 className="experience-text-date">November - 2021</h5>
                <p className="subTitle experience-text-desc">
                  A React application made similar like original Spotify using
                  React - Redux
                </p>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
