import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Academics.css";


const Academics = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Academic sections data
  const academicSections = [
    {
      id: "alumni",
      title: "Alumni Registration",
      description:
        "Register as an alumni and stay connected with your alma mater",
      link: "/pages/alumni-registration",
      category: "student",
      icon: "👥",
    },
    {
      id: "job-fair",
      title: "Job Fair",
      description: "Upcoming job fairs and placement opportunities",
      link: "/pages/job-fair",
      category: "career",
      icon: "💼",
    },
    {
      id: "calendar",
      title: "Academic Calendar",
      description: "Important dates, schedules, and academic timelines",
      link: "/pages/academic-calendar",
      category: "academic",
      icon: "📅",
    },
    {
      id: "syllabus",
      title: "Syllabus",
      description: "Course curriculum and detailed syllabus for all programs",
      link: "/pages/syllabus",
      category: "academic",
      icon: "📚",
    },
    {
      id: "results",
      title: "Result",
      description: "Examination results and grade reports",
      link: "/pages/results",
      category: "academic",
      icon: "📊",
    },
    {
      id: "web",
      title: "DBGI Web",
      description: "Access internal web portal and online resources",
      link: "https://dbgi.ac.in",
      external: true,
      category: "resources",
      icon: "🌐",
    },
    {
      id: "papers",
      title: "Previous Year Exam Papers",
      description: "Archive of previous examination question papers",
      link: "/pages/previous-papers",
      category: "academic",
      icon: "📝",
    },
  ];

  // Filter sections by category
  const filteredSections =
    activeTab === "all"
      ? academicSections
      : academicSections.filter((section) => section.category === activeTab);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching academics for:", searchQuery);
      // Implement search functionality
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 80;
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };
  return (
    <div>

      <div className="academics-container">
        {/* Navigation bar */}
        <Navbar
          headerScrolled={headerScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          scrollToSection={scrollToSection}
          currentPage="academics"
        />

      <Hero />
       
        {/* Academic Tabs */}
        <section className="academics-tabs">
          <div className="container">
            <div className="tabs-container">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Resources
              </button>
              <button
                className={`tab-btn ${activeTab === "academic" ? "active" : ""}`}
                onClick={() => setActiveTab("academic")}
              >
                Academic
              </button>
              <button
                className={`tab-btn ${activeTab === "career" ? "active" : ""}`}
                onClick={() => setActiveTab("career")}
              >
                Career
              </button>
              <button
                className={`tab-btn ${activeTab === "student" ? "active" : ""}`}
                onClick={() => setActiveTab("student")}
              >
                Student
              </button>
              <button
                className={`tab-btn ${activeTab === "resources" ? "active" : ""}`}
                onClick={() => setActiveTab("resources")}
              >
                Resources
              </button>
            </div>
          </div>
        </section>

        {/* Academic Sections Grid */}
        <section className="academic-sections" id="sections">
          <div className="container">
            <div className="section-title">
              <h2>Academic Portal</h2>
              <p>
                Explore all academic resources and services available for DBGI
                students, faculty, and alumni community
              </p>
            </div>

            <div className="sections-grid">
              {filteredSections.map((section) => (
                <div className="academic-card" key={section.id}>
                  <div className="academic-card-header">
                    <div className="academic-icon">{section.icon}</div>
                    <h3>{section.title}</h3>
                  </div>
                  <div className="academic-card-body">
                    <p>{section.description}</p>
                  </div>
                  <div className="academic-card-footer">
                    {section.external ? (
                      <a
                        href={section.link}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Portal
                      </a>
                    ) : (
                      <Link to={section.link} className="btn">
                        Access Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links">
          <div className="container">
            <div className="section-title">
              <h2>Quick Access</h2>
              <p>Most frequently accessed academic resources</p>
            </div>
            <div className="quick-links-grid">
              <div className="quick-link-card">
                <div className="quick-link-icon">📅</div>
                <h3>Current Academic Calendar</h3>
                <p>Download the latest academic schedule</p>
                <Link to="/pages/academic-calendar" className="quick-link-btn">
                  View Calendar →
                </Link>
              </div>
              <div className="quick-link-card">
                <div className="quick-link-icon">📚</div>
                <h3>Course Syllabi</h3>
                <p>Access curriculum for all programs</p>
                <Link to="/pages/syllabus" className="quick-link-btn">
                  Browse Courses →
                </Link>
              </div>
              <div className="quick-link-card">
                <div className="quick-link-icon">📊</div>
                <h3>Exam Results</h3>
                <p>Check latest examination results</p>
                <Link to="/pages/results" className="quick-link-btn">
                  Check Results →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="academic-info">
          <div className="container">
            <div className="info-grid">
              <div className="info-card">
                <h3>Academic Policies</h3>
                <ul>
                  <li>Examination Guidelines</li>
                  <li>Attendance Policy</li>
                  <li>Academic Integrity</li>
                  <li>Grade Appeals Process</li>
                  <li>Course Registration Rules</li>
                </ul>
                <Link to="/pages/policies" className="btn-outline">
                  View All Policies
                </Link>
              </div>
              <div className="info-card">
                <h3>Student Support</h3>
                <ul>
                  <li>Academic Counseling</li>
                  <li>Library Resources</li>
                  <li>Research Support</li>
                  <li>Technical Assistance</li>
                  <li>Career Guidance</li>
                </ul>
                <Link to="/pages/support" className="btn-outline">
                  Get Support
                </Link>
              </div>
              <div className="info-card">
                <h3>Important Dates</h3>
                <ul>
                  <li>Mid-Term Examinations: March 15-30</li>
                  <li>Project Submissions: April 10</li>
                  <li>Final Exams: May 20 - June 10</li>
                  <li>Result Declaration: June 25</li>
                  <li>Next Session Starts: July 15</li>
                </ul>
                <Link to="/pages/calendar" className="btn-outline">
                  Full Calendar
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Academics;
