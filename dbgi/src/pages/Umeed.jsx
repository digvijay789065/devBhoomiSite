import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/Umeed.css";
import PDF1 from "../assets/documents/Umeed.pdf";
import UmeedCard from "../components/UmeedCards";


const Umeed = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Umeed" description="" />

      <section className="why-choose">
        <div className="container">
          <div className="section-title">
            <h2>Umeed</h2>
            <p>
              For students Mental Health compliance
            </p>
          </div>
          <div className="features-grid">
            <UmeedCard
              iconImage="fa-solid fa-chalkboard-user"
              title="Counsellors Helpline"
              description="Dr. Anurag Panwar"
              Phone="+91 8054757697"
            />
            <UmeedCard
              iconImage="fa-solid fa-user-doctor"
              title="Psychologist Helpline"
              description="Dr. Rashid Hasan"
              Phone="+91 9897377406"
            />
            <UmeedCard
              iconImage="fa-solid fa-hotel"
              title="Tele-MANAS Helpline No"
              description="National Helpline Number"
              Phone="18008914416"
            />
            
            <UmeedCard
              iconImage="fa-solid fa-circle-info"
              title="Internal Complaint Committee Head"
              description="Mr. Sachin Kumar Yadav"
              Phone="+91 6398080761"
            />
            <UmeedCard
              iconImage="fa-solid fa-brain"
              title="Hostel Warden"
              description="Mr. Bacchu Singh"
              Phone="+91 9627879147"
            />
          </div>
        </div>
      </section>

      <section className="pdf-gallery-section">
        <div className="container">
          <div className="pdf-gallery" id="pdf-gallery"></div>
        </div>
      </section>
      <section className="pdf-embed">
        <embed
          src={PDF1}
          type="application/pdf"
          width="80%"
          height="800"
          title="Embedded PDF Viewer"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Umeed;
