import React from "react";
import campus1 from "../assets/images/campus_1.webp";
import { Link } from "react-router-dom";
const About = (
  {
    titleHeading, 
    titleDescription,
    contentHeading,
    contentDescription,
    showButtons,
    btnText,
  }
) => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>{titleHeading}</h2>
            <p>
              {titleDescription}
            </p>
          </div>
          <div className="about-content scroll-animation">
            <div className="about-text">
              <h3>{contentHeading}</h3>
              <p>
                {contentDescription}
              </p>
              {showButtons && (
                <Link to="/pages/about-us" className="btn about-cta scroll-animation">
                  {btnText}
                </Link>
              )}
            </div>
            <div className="about-image scroll-animation">
              <img src={campus1} alt="DBGI Campus" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
