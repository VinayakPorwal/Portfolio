import React from "react";
import "./css/contact/contact.css";
export default function contact() {
  return (
    <div id="contact">
      <div className="main contact-margin-top">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">
              Contact Me{" "}
              <img
                alt="☎️"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/260e.png"
                style={{height: '1em', width: "1em", margin:" 0px 0.05em 0px 0.1em",verticalAlign:" -0.1em"}}
              />
            </h1>
            <p className="subTitle contact-subtitle">
              Discuss a project or just want to say hi? My Inbox is open for
              all.
            </p>
            <div className="contact-text-div">
              <a className="contact-detail" href="tel:(+91)-9589632798">
                (+91)-9589632798
              </a>
              <br />
              <br />
              <a className="contact-detail-email" href="mailto:vinayakporwal5522@gmail.com">
                vinayakporwal5522@gmail.com
              </a>
              <br />
              <br />
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
                {/* <a
                  href="https://twitter.com/Ayush__Nigam"
                  className="icon-button twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                  <span></span>
                </a> */}
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
            </div>
          </div>
          <div className="contact-image-div">
        
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_2f2iz9kq.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}


