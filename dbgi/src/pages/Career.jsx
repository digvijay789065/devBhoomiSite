import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/Career.css";

const Career = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmittingCareerForm, setIsSubmittingCareerForm] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    positionCategory: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const navLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const careerFormRef = useRef(null);
  const headerRef = useRef(null);
  const printBtnRef = useRef(null);

  // Mobile Menu Toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Search Form Submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      setSearchTerm("");
    }
  };

  // Career Form Submission
  const handleCareerFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingCareerForm(true);

    // Simulate API call/email submission
    setTimeout(() => {
      alert(
        `Thank you ${formData.name}! Your inquiry has been submitted successfully. Our HR team will contact you at ${formData.email} within 48 hours. For immediate consideration, please send your CV to job@dbgisre.edu.in`,
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        positionCategory: "",
        message: "",
      });
      setSelectedPosition("");

      setIsSubmittingCareerForm(false);
    }, 2000);
  };

  // Position Card Click Effect
  const handlePositionCardClick = (positionTitle, isSpecial = false) => {
    // Scroll to form
    const applySection = document.querySelector("#apply");
    if (applySection) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const targetPosition =
        applySection.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // Auto-fill position in form
    const positionText = isSpecial
      ? `Interested in: ${positionTitle}`
      : `Interested in: ${positionTitle} position`;
    setFormData((prev) => ({
      ...prev,
      message: prev.message
        ? `${prev.message}\n\n${positionText}`
        : positionText,
    }));
  };

  // Copy Email Address
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("job@dbgisre.edu.in");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  // Smooth scroll for anchor links
  const handleAnchorClick = (e, href) => {
    if (href === "#") return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();

      // Close mobile menu if open
      setMobileMenuOpen(false);

      // Calculate header height offset
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

 
  // Feature toggle for position cards
  useEffect(() => {
    let interval;

    const featureToggle = () => {
      let isFeatured = true;

      interval = setInterval(() => {
        const featuredCards = document.querySelectorAll(
          ".position-card.featured",
        );
        featuredCards.forEach((card) => {
          if (isFeatured) {
            card.style.boxShadow = "0 0 20px rgba(255, 210, 0, 0.5)";
          } else {
            card.style.boxShadow = "";
          }
        });
        isFeatured = !isFeatured;
      }, 5000);
    };

    const timer = setTimeout(featureToggle, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Add page load animation
  useEffect(() => {
    const handleLoad = () => {
      document.body.classList.add("loaded");

      const heroContent = document.querySelector(".career-hero-content");
      if (heroContent) {
        heroContent.style.animation = "fadeIn 1s ease-out";
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Add CSS animation
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .print-btn {
                background: linear-gradient(135deg, #ffd200, #fe0b00) !important;
                padding: 12px 24px !important;
                border-radius: 25px !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
                color: white !important;
                border: none !important;
                cursor: pointer !important;
                font-size: 14px !important;
                font-weight: 600 !important;
                transition: all 0.3s ease !important;
            }
            
            .print-btn:hover {
                transform: translateY(-3px) !important;
                box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
            }
            
            @media print {
                header, .btn, .mobile-menu, .search-container, .print-btn, nav, .navbar, .hero {
                    display: none !important;
                }
                
                body {
                    padding-top: 0 !important;
                    margin: 0 !important;
                }
                
                .position-card, .admin-card {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                
                section {
                    page-break-before: auto;
                }
            }
        `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Add smooth scroll to all anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href === "#") return;

        // Handle external links
        if (anchor.getAttribute("target") === "_blank") return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();

          // Close mobile menu if open
          setMobileMenuOpen(false);

          // Calculate header height offset
          const headerHeight = headerRef.current?.offsetHeight || 0;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        headerScrolled={false}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        searchQuery={searchTerm}
        setSearchQuery={setSearchTerm}
        handleSearch={handleSearchSubmit}
        scrollToSection={() => {}}
        headerRef={headerRef}
      />
      
      <Hero
        heading="Career @DBGI"
        description="Shape futures while building your own legacy. Join one of the fastest-growing engineering and management institutes in western U.P."
      />
      <section className="positions" id="positions">
        <div className="container">
          <div className="section-title">
            <h2>Available Positions</h2>
            <p>Join our team of exceptional educators and administrators</p>
          </div>

          <div className="position-category">
            <h3 className="category-title">
              <i className="fas fa-chalkboard-teacher"></i> Faculty Positions
            </h3>
            <div className="positions-grid">
              <div
                className="position-card featured"
                onClick={() => handlePositionCardClick("HOD/Professor")}
                style={{ cursor: "pointer" }}
              >
                <div className="position-header">
                  <h4>HOD/Professor</h4>
                  <span className="badge urgent">Urgent Hiring</span>
                </div>
                <div className="position-departments">
                  <h5>Departments:</h5>
                  <ul>
                    <li>
                      <i className="fas fa-graduation-cap"></i> B.Tech &
                      Polytechnic (Civil/EEE/ME/ECE/CS/IT)
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> MBA, MCA
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> BBA, BCA, B.Com
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> B.Pharm, D.Pharm
                    </li>
                  </ul>
                </div>
                <div className="position-footer">
                  <span className="qualification">
                    <i className="fas fa-user-graduate"></i> PhD/M.Tech Required
                  </span>
                </div>
              </div>

              <div
                className="position-card"
                onClick={() => handlePositionCardClick("Associate Professor")}
                style={{ cursor: "pointer" }}
              >
                <div className="position-header">
                  <h4>Associate Professor</h4>
                  <span className="badge multiple">Multiple Positions</span>
                </div>
                <div className="position-departments">
                  <h5>Departments:</h5>
                  <ul>
                    <li>
                      <i className="fas fa-graduation-cap"></i> B.Tech
                      (Civil/EEE/ME/ECE/CS/IT)
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> MBA, MCA
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> BBA, BCA, B.Com
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> B.Pharm, D.Pharm
                    </li>
                  </ul>
                </div>
                <div className="position-footer">
                  <span className="qualification">
                    <i className="fas fa-user-graduate"></i> PhD/M.Tech Required
                  </span>
                </div>
              </div>

              <div
                className="position-card"
                onClick={() => handlePositionCardClick("Assistant Professor")}
                style={{ cursor: "pointer" }}
              >
                <div className="position-header">
                  <h4>Assistant Professor</h4>
                  <span className="badge multiple">Multiple Positions</span>
                </div>
                <div className="position-departments">
                  <h5>Departments:</h5>
                  <ul>
                    <li>
                      <i className="fas fa-graduation-cap"></i> B.Tech
                      (Civil/EEE/ME/ECE/CS/IT)
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> MBA, MCA
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> BBA, BCA, B.Com
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> B.Pharm, D.Pharm
                    </li>
                  </ul>
                </div>
                <div className="position-footer">
                  <span className="qualification">
                    <i className="fas fa-user-graduate"></i> M.Tech/MBA/MCA
                    Required
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="position-category">
            <h3 className="category-title">
              <i className="fas fa-star"></i> Special Positions
            </h3>
            <div className="positions-grid special-grid">
              <div
                className="position-card"
                onClick={() =>
                  handlePositionCardClick("Applied Science Faculty", true)
                }
                style={{ cursor: "pointer" }}
              >
                <div className="position-header">
                  <h4>Applied Science Faculty</h4>
                  <span className="badge academic">Academic</span>
                </div>
                <div className="position-details">
                  <p>
                    <strong>Subjects:</strong> Physics/Maths/Chemistry/English
                  </p>
                  <p>
                    <strong>Requirement:</strong> Ph.D. in relevant field
                  </p>
                  <p>
                    <strong>Positions:</strong> Professor/Assoc.Prof./Asst.Prof.
                  </p>
                </div>
              </div>

              <div
                className="position-card"
                onClick={() =>
                  handlePositionCardClick(
                    "Principal for Polytechnic Institute",
                    true,
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <div className="position-header">
                  <h4>Principal for Polytechnic Institute</h4>
                  <span className="badge leadership">Leadership</span>
                </div>
                <div className="position-details">
                  <p>
                    <strong>Qualification:</strong> B.Tech with M.Tech Degree
                  </p>
                  <p>
                    <strong>Experience:</strong> Relevant experience required
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="position-category">
            <h3 className="category-title">
              <i className="fas fa-users-cog"></i> Administrative Positions
            </h3>
            <div className="admin-grid">
              <div
                className="admin-card"
                onClick={() => handlePositionCardClick("Registrar")}
                style={{ cursor: "pointer" }}
              >
                <h4>Registrar</h4>
                <p>Post Graduate with minimum 6 years of relevant experience</p>
              </div>
              <div
                className="admin-card"
                onClick={() => handlePositionCardClick("Sub Registrar")}
                style={{ cursor: "pointer" }}
              >
                <h4>Sub Registrar</h4>
                <p>Post Graduate with minimum 3 years of experience</p>
              </div>
              <div
                className="admin-card"
                onClick={() => handlePositionCardClick("Examination Head")}
                style={{ cursor: "pointer" }}
              >
                <h4>Examination Head</h4>
                <p>A Professor with relevant experience of 10 years</p>
              </div>
              <div
                className="admin-card"
                onClick={() => handlePositionCardClick("Admin Officer")}
                style={{ cursor: "pointer" }}
              >
                <h4>Admin Officer</h4>
                <p>
                  A well-spoken graduate with basic knowledge of computer (MBA
                  preferred)
                </p>
              </div>
              <div
                className="admin-card"
                onClick={() =>
                  handlePositionCardClick("Mechanical Transport Officer")
                }
                style={{ cursor: "pointer" }}
              >
                <h4>Mechanical Transport Officer</h4>
                <p>Well experienced (Man with Army background preferred)</p>
              </div>
            </div>
          </div>

          <div className="position-category">
            <h3 className="category-title">
              <i className="fas fa-tools"></i> Technical / Support Staff
            </h3>
            <div className="support-tags">
              {[
                "Lab Technicians",
                "Hostel Warden",
                "Clerks/Office Assistants",
                "Front Desk Executive/Receptionist (Female)",
                "System Administrator",
                "Networking Engineers",
                "Computer Lab Technicians",
                "Peons",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="support-tag"
                  onClick={() => handlePositionCardClick(tag)}
                  style={{ cursor: "pointer" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container">
          <div className="section-title">
            <h2>Benefits & Perks</h2>
            <p>Why join DBGI? Here's what we offer our team members</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-money-bill-wave"></i>
              <h4>Competitive Salary</h4>
              <p>
                As Per the Latest AICTE norms and scales. Salary shall not be a
                constraint for deserving candidates.
              </p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-home"></i>
              <h4>Campus Residence</h4>
              <p>
                Campus residence facility is available for candidates from other
                states (limited).
              </p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-industry"></i>
              <h4>Industry Welcome</h4>
              <p>
                Industry personnel meeting AICTE norms are also welcome to
                apply.
              </p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-chart-line"></i>
              <h4>Career Growth</h4>
              <p>
                Opportunities for vertical growth and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="application-section" id="apply">
        <div className="container">
          <div className="application-container">
            <div className="application-info">
              <h2>
                <i className="fas fa-file-upload"></i> How to Apply
              </h2>
              <div className="application-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Prepare Your Documents</h4>
                    <p>
                      Individuals with relevant qualification and experience may
                      contact in person, otherwise forward / email / post your
                      CV, credentials with latest passport size photograph.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Contact Information</h4>
                    <p>
                      All related correspondence must be done with{" "}
                      <strong
                        className="job-email"
                        onClick={copyEmailToClipboard}
                        style={{
                          cursor: "pointer",
                          color: "#fe0b00",
                          textDecoration: "underline",
                        }}
                      >
                        {copiedEmail ? (
                          <>
                            <i className="fas fa-check"></i> Email copied!
                          </>
                        ) : (
                          "job@dbgisre.edu.in"
                        )}
                      </strong>{" "}
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Apply Now</h4>
                    <p>
                      Submit your application for immediate consideration. We
                      review applications on a rolling basis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="application-form">
              <h3>Quick Application Inquiry</h3>
              <form
                id="careerForm"
                onSubmit={handleCareerFormSubmit}
                ref={careerFormRef}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <select
                    required
                    value={formData.positionCategory}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        positionCategory: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Position Category</option>
                    <option value="faculty">Faculty Positions</option>
                    <option value="admin">Administrative Positions</option>
                    <option value="support">Support Staff</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Brief about your qualifications and experience"
                    rows="3"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn submit-btn"
                  disabled={isSubmittingCareerForm}
                >
                  {isSubmittingCareerForm ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Submit Inquiry
                    </>
                  )}
                </button>
                <p className="form-note">We'll contact you within 48 hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
