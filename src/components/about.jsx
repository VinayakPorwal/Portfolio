/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";
import "./css/Dashboard/greeting.css";
import "./css/skills/Skills.css";
import "./css/skills/SoftwareSkills.css";
import "./css/skills/Progress.css";

export default function About() {
  return (
    <div id="skills">
      <div className="main">
        <div className="skills-main-div">
          <div className="skills-image-div">
            <div>
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_fQij9m.json"
                background="transparent"
                speed="1"
                style={{ Width: "100px", Height: "100px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div
            className="react-reveal skills-text-div"
            style={{
              animationFillMode: "both",
              animationDuration: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              animationName: "react-reveal-671762739750136-3",
            }}
          >
            <h1 className="skills-heading">What I do </h1>
            <p className="subTitle skills-text-subtitle">
              CRAZY WEB DEVELOPER / SOFTWARE DEVELOPER WHO WANTS TO EXPLORE
              EVERY TECH STACK
            </p>
            <div>
              <div className="software-skills-main-div">
                <ul className="dev-icons">
                  <li className="software-skill-inline" name="html-5">
                    <i className="fab fa-html5"></i>
                    <p>html-5</p>
                  </li>
                  <li className="software-skill-inline" name="css3">
                    <i className="fab fa-css3-alt"></i>
                    <p>css3</p>
                  </li>
                  <li className="software-skill-inline" name="JavaScript">
                    <i className="fab fa-js"></i>
                    <p>JavaScript</p>
                  </li>
                  <li className="software-skill-inline" name="reactjs">
                    <i className="fab fa-react"></i>
                    <p>reactjs</p>
                  </li>
                  <li className="software-skill-inline" name="nodejs">
                    <i className="fab fa-node"></i>
                    <p>nodejs</p>
                  </li>
                  <li className="software-skill-inline" name="swift">
                    <i className="fab fa-php"></i>
                    <p>php</p>
                  </li>
                  <li className="software-skill-inline" name="npm">
                    <i className="fab fa-npm"></i>
                    <p>npm</p>
                  </li>
                  <li className="software-skill-inline" name="python">
                    <i className="fab fa-python"></i>
                    <p>python</p>
                  </li>
                  <li className="software-skill-inline" name="firebase">
                    <i className="fas fa-fire"></i>
                    <p>firebase</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="subTitle skills-text">
                <img
                  alt="⚡"
                  draggable="false"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  style={{
                    height: "1em",
                    width: "1em",
                    margin: "0px 0.05em 0px 0.1em",
                    verticalAlign: "-0.1em",
                  }}
                />{" "}
                Develop highly interactive Front end / User Interfaces and Back
                end for your web applications
              </p>
              <p className="subTitle skills-text">
                <img
                  alt="⚡"
                  draggable="false"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  style={{
                    height: "1em",
                    width: "1em",
                    margin: "0px 0.05em 0px 0.1em",
                    verticalAlign: "-0.1em",
                  }}
                />{" "}
                Progressive Web Applications
              </p>
              <p className="subTitle skills-text">
                <img
                  alt="⚡"
                  draggable="false"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  style={{
                    height: "1em",
                    width: "1em",
                    margin: "0px 0.05em 0px 0.1em",
                    verticalAlign: "-0.1em",
                  }}
                />{" "}
                Integration of third party services such as Firebase/ AWS /
                Google Cloud
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          <div className="skill">
            <p>WEB DEVELOPMENT</p>
            <div className="meter">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skill">
            <p>Python / C++ / C </p>
            <div className="meter">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
          <div className="skill">
            <p>Data Structures</p>
            <div className="meter">
              <span style={{ width: "55%" }}></span>
            </div>
          </div>
        </div>
        <div className="skills-image">
          {" "}
          <div>
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_ul35wckt.json"
              background="transparent"
              speed="1"
              style={{ maxHeight: "40vh", marginTop:'-6rem' , transform: 'rotateY(180deg)'}}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
