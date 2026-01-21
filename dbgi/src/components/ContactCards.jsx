import React from "react";
import '../styles/Admission.css'

const ContactCards = () => {
  return (
    <div>
      <section className="admission-office">
        <div className="container">
          <div className="office-card">
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
    </div>
  );
};

export default ContactCards;
