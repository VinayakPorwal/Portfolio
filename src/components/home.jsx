/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Header from "./Header";
import "./css/Dashboard/socialmedia.css";
import "./css/Dashboard/button.css";
import "./css/header/header.css";
import "./css/header/ToggleSwitch.css";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

export default function Home() {
  return (
    <div id="greet">
      <div className="main" >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text">
              {" "}
              Hi, I'm Vinayak{" "}
              <span className="wave-emoji">
                {" "}
                <img
                  alt="👋"
                  draggable="false"
                  src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
                />
              </span>
            </h1>
            <p className="greeting-text-p subTitle">
              Creative coding enthusiast , currently pursuing Bachelors of
              technology from RGPV, Indore , leaning forward to learn about
              cloud and DevOps ,want to create carrier in the same , Having
              experience in web-development looking forward to challenge my
              skills in suitable environment.
            </p>
            <div className="social-media-div">
              <a
                href="https://github.com/vinayakporwal"
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span></span>
              </a>
              <a
                href="mailto:vinayakporwal5522@gmail.com"
                className="icon-button google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-google"></i>
                <span></span>
              </a>
              <a
                href="https://www.instagram.com/vinayak_porwal/"
                className="icon-button instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
                <span></span>
              </a>
              <a
                href="#"
                className="icon-button twitter"
                // target="_blank"
                rel="noopener noreferrer"
                disabled
              >
                <i className="fab fa-twitter"></i>
                <span></span>
              </a>
              {/* <a
                href="https://stackoverflow.com/users/17807745/ayush-nigam"
                className="icon-button stack-overflow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-stack-overflow"></i>
                <span></span>
              </a> */}
            </div>
            <div className="button-greeting-div">
              <div>
                <a className="main-button" href="#contact">
                  Contact me
                </a>
              </div>
              <div>
                <a
                  className="main-button"
                  // href="https://drive.google.com/file/d/1wxryaFmQS3fXO-FEtugRoYNa-8jL_3GA/view?usp=drivesdk"
                  // target="_blank"
                  disabled
                >
                  See my resume
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div >
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_wci9dxrs.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}
