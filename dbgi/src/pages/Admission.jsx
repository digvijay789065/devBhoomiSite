import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/Admission.css";
import { Link } from "react-router-dom";
import ApplyNow from "../components/ApplyNow";

const Admission = () => {
  const feeData = [
    { id: 1, program: "B. Tech", fee: "₹ 55,000/-" },
    { id: 2, program: "B. Pharma", fee: "₹ 63,300/-" },
    { id: 3, program: "MBA", fee: "₹ 59,700/-" },
    { id: 4, program: "MCA", fee: "₹ 55,000/-" },
    { id: 5, program: "Polytechnic", fee: "₹ 30,150/-" },
    { id: 6, program: "D. Pharma", fee: "₹ 45,000/-" },
    { id: 7, program: "BBA", fee: "₹ 24,500/-" },
    { id: 8, program: "BCA", fee: "₹ 35,500/-" },
    { id: 9, program: "B.COM", fee: "₹ 10,455/-" },
  ];

  return (
    <div>
      <Navbar />
      <Hero
        heading="Begin Your Journey With Us"
        description="Welcome to the Admissions section, designed to guide you through every step of joining our institution. Find detailed information on the admission procedure, online registration, fee structure, and the official prospectus—all in one place."
      />
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Admission Procedure</h2>
            <p>Begin your journey towards academic excellence.</p>
          </div>

          <div className="procedure-content">
            <div className="procedure-card">
              <h3>ADMISSION PROCEDURE</h3>
              <p>
                Dev Bhoomi Group Of Institutions (DBGI) accepts admission
                applications to a variety of technologically focused bachelor's,
                master's degree programs. Each year, DBGI attracts thousands of
                applications from prospective students, but admission is given
                only to good students who will meet the minimum eligibility
                criteria set by DBGI and allows only the brightest students to
                have the privilege of taking admission in our group.
              </p>
            </div>

            <div className="procedure-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Online Registration</h4>
                  <p>
                    For online Admissions process, students must visit our
                    Website and should fill-in the detail available in the free
                    Registration form. On receiving the Registration form, our
                    Admission counselors call the Admission seeker/s in no time.
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdkfLCsYx8-8QY0KX2SdpCdIRzt3J5yQoX1lbZjjQoMWgmyug/viewform?embedded=true&amp;usp=embed_facebook">
                      {" "}
                      Register Here
                    </Link>
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Walk-in Registration</h4>
                  <p>
                    The Applicant can walk directly into our campus & meet our
                    admission counselor, who will counsel the student regarding
                    the different courses and the eligibility criteria. After
                    all the details received by the student, the applicant can
                    fill the admission form & submit the photocopy of the
                    documents. After scrutiny, the applicant will be informed
                    about admission. On confirmation of admission the candidate
                    is required to deposit the fee as per college norms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="fee-table-section">
          <div className="container">
            <div className="section-title">
              <h2>Program Fee Structure</h2>
              <p>Annual fee details for various programs at DBGI</p>
            </div>

            <div className="fee-table-container">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Programme</th>
                    <th>Fee (Annual)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((item) => (
                    <tr key={item.id}>
                      <td className="serial">{item.id}.</td>
                      <td className="program">{item.program}</td>
                      <td className="fee">{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <div className="table-note">
                        <i className="fas fa-info-circle"></i>
                        <span>
                          Fees are subject to change. Additional charges may
                          apply.
                        </span>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="fee-disclaimer">
              <h4>
                <i className="fas fa-exclamation-triangle"></i> Important Notes:
              </h4>
              <ul>
                <li>Above fees are for one academic year</li>
                <li>Hostel and mess charges are additional</li>
                <li>Examination fee is separate</li>
                <li>Scholarships available for eligible candidates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Office */}
      <section className="admission-office">
        <div className="container">
          <div className="office-card">
            <div className="section-title">
              <h2>Our Admissions Office</h2>
            </div>

            <div className="office-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>
                    7 Km. Milestone Dabki Road,
                    <br />
                    Village Beri Jamapur Ahtemal Via Civil Hospital Xing,
                    <br />
                    Saharanpur (Uttar Pradesh) 247001
                  </p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>dbgi@dbgisre.edu.in</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Contact Numbers</h4>
                  <p>+91 9568775222, +91 9568776222</p>
                </div>
              </div>
            </div>

            <div className="office-hours">
              <h4>Office Hours</h4>
              <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
              <p>Saturday - Sunday: 12:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <ApplyNow
        heading="Ready to Join the DBGI Family?"
        description="Take the first step toward your future at Dev Bhoomi Group of
          Institutions. Applications for the next academic year are now open."
        showButtons={false}
        btnText="Apply Now"
      />
      <Footer />
    </div>
  );
};

export default Admission;
