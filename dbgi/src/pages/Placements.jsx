import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/Placement.css";
import IMG1 from "../assets/placements_images/1.webp";
import IMG2 from "../assets/placements_images/2.webp";
import IMG3 from "../assets/placements_images/3.webp";
import IMG4 from "../assets/placements_images/4.webp";
import PIC1 from "../assets/recruiters_images/1.webp";
import PIC2 from "../assets/recruiters_images/2.webp";
import PIC3 from "../assets/recruiters_images/3.webp";
import ApplyNow from "../components/ApplyNow";

const Placements = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Placements Records"
        description="Few highlights of some of our students getting placed in their respective fields and some of our Recruitment partners."
      />

      <section>
        <div className="container">
          <div className="section-title">
            <h2>Placements Track Record</h2>
          </div>
        </div>

          <div className="container-main">
            <div className="section">
              <img src={IMG1} alt="Placement 1" />
            </div>

            <div className="section">
              <img src={IMG2} alt="Placement 2" />
            </div>

            <div className="section">
              <img src={IMG3} alt="Placement 3" />
            </div>

            <div className="section">
              <img src={IMG4} alt="Placement 4" />
            </div>
          </div>
    
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <h2>Our Recruiters</h2>
          </div>
        </div>

          <div className="container-main">
            <div className="section">
              <img src={PIC1} alt="Recruiter 1" />
            </div>
            <div className="section">
              <img src={PIC2} alt="Recruiter 2" />
            </div>
            <div className="section">
              <img src={PIC3} alt="Recruiter 3" />
            </div>
          </div>
    
      </section>

      <ApplyNow
        heading="Ready to Start Your Academic Journey?"
        description="Take the first step toward your future at Dev Bhoomi Group of Institutions. Applications for the next academic year are now open."
        btnText="Join DBGI"
      />
      
      <Footer />
    </div>
  );
};

export default Placements;
