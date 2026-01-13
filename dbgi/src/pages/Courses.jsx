import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Courses.css";
import ApplyNow from "../components/ApplyNow";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import BtechCS from "../assets/courses_images/courses/undergraduate/btech/computer_science.webp";
import BtechCivil from "../assets/courses_images/courses/undergraduate/btech/civil.webp";
import BtechElectrical from "../assets/courses_images/courses/undergraduate/btech/electrical.webp";
import BtechEC from "../assets/courses_images/courses/undergraduate/btech/electronics_and_comm.webp";
import BtechMechanicalCourse from "../assets/courses_images/courses/undergraduate/btech/mechanical_course.webp";

import BcaImg from "../assets/courses_images/courses/undergraduate/bca/bca.webp";
import McaImg from "../assets/courses_images/courses/postgraduate/mca.webp";

import DiplomaCivil from "../assets/courses_images/courses/diploma/civil/civil.webp";
import DiplomaElectricalElectronics from "../assets/courses_images/courses/diploma/electrical_electronics/electrical_electronics.webp";
import DiplomaMechAutomobile from "../assets/courses_images/courses/diploma/mechanical/automobile.webp";
import DiplomaMechProduction from "../assets/courses_images/courses/diploma/mechanical/production.webp";
import DiplomaCS from "../assets/courses_images/courses/diploma/cs/cs.webp";

import BbaImg from "../assets/courses_images/courses/undergraduate/bba/bba.webp";
import MbaImg from "../assets/courses_images/courses/postgraduate/mba.webp";
import BcomImg from "../assets/courses_images/courses/undergraduate/bcom/bcom.png";

import DpharmImg from "../assets/courses_images/courses/diploma/pharmacy/dpharm.webp";
import BpharmImg from "../assets/courses_images/courses/undergraduate/pharmacy/bpharm.webp";
import FeatureCard from "../components/FeatureCard";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("engineering");

  const tabData = [
    { id: "engineering", label: "Engineering" },
    { id: "computer_application", label: "Computer Application" },
    { id: "polytechnic", label: "Polytechnic" },
    { id: "management", label: "Management" },
    { id: "pharmacy", label: "Pharmacy" },
  ];

  const engineeringCourses = [
    {
      id: 1,
      title: "B.Tech - Computer Science & Engineering",
      duration: "4 Years",
      image: BtechCS,
      description:
        "Comprehensive program covering programming, algorithms, databases, and software engineering.",
      features: [
        "Data Structures & Algorithms",
        "Database Management",
        "Artificial Intelligence",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      title: "B.Tech - Civil Engineering",
      duration: "4 Years",
      image: BtechCivil,
      description:
        "Comprehensive program covering structural design, construction management, and environmental engineering.",
      features: [
        "Structural Analysis & Design",
        "Construction Technology",
        "Environmental Engineering",
        "Geotechnical Engineering",
      ],
    },
    {
      id: 3,
      title: "B.Tech - Electrical & Electronics Engineering",
      duration: "4 Years",
      image: BtechElectrical,
      description:
        "Focuses on power systems, electronics, control systems, and electrical machines.",
      features: [
        "Power Systems",
        "Control Systems",
        "Electrical Machines",
        "Power Electronics",
      ],
    },
    {
      id: 4,
      title: "B.Tech - Electronics & Communication Engineering",
      duration: "4 Years",
      image: BtechEC,
      description:
        "Covers analog and digital electronics, communication systems, and signal processing.",
      features: [
        "Digital Electronics",
        "Communication Systems",
        "Microprocessors",
        "VLSI Design",
      ],
    },
    {
      id: 5,
      title: "B.Tech - Mechanical Engineering",
      duration: "4 Years",
      image: BtechMechanicalCourse,
      description:
        "Focuses on design, thermal sciences, manufacturing, and automation.",
      features: [
        "Thermodynamics",
        "Machine Design",
        "Manufacturing Processes",
        "Automation & Robotics",
      ],
    },
  ];

  const computerApplicationCourses = [
    {
      id: 1,
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      image: BcaImg,
      description:
        "Comprehensive program in computer applications and software development.",
      features: [
        "Programming Languages",
        "Database Systems",
        "Web Technologies",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      image: McaImg,
      description:
        "Advanced program in computer applications and software development.",
      features: [
        "Advanced Programming",
        "Web Technologies",
        "Database Systems",
        "Software Project Management",
      ],
    },
  ];

  const polytechnicCourses = [
    {
      id: 1,
      title: "Diploma in Civil Engineering",
      duration: "3 Years",
      image: DiplomaCivil,
      description:
        "Practical training in construction techniques, surveying, and building design.",
      features: [
        "Building Construction",
        "Surveying",
        "Construction Materials",
        "Estimating & Costing",
      ],
    },
    {
      id: 2,
      title: "Diploma in Electrical Engineering",
      duration: "3 Years",
      image: DiplomaElectricalElectronics,
      description:
        "Focuses on electrical systems, machines, and power distribution.",
      features: [
        "Electrical Circuits",
        "Power Systems",
        "Electrical Machines",
        "Installation & Maintenance",
      ],
    },
    {
      id: 3,
      title: "Diploma in Mechanical Engineering (Automobile)",
      duration: "3 Years",
      image: DiplomaMechAutomobile,
      description:
        "Specialized program focusing on automobile technology and maintenance.",
      features: [
        "Automobile Engineering",
        "Engine Technology",
        "Vehicle Maintenance",
        "Automotive Electronics",
      ],
    },
    {
      id: 4,
      title: "Diploma in Mechanical Engineering (Production)",
      duration: "3 Years",
      image: DiplomaMechProduction,
      description:
        "Focuses on manufacturing processes, production planning, and quality control.",
      features: [
        "Production Technology",
        "Quality Control",
        "Industrial Engineering",
        "Manufacturing Processes",
      ],
    },
    {
      id: 5,
      title: "Diploma in Computer Science",
      duration: "3 Years",
      image: DiplomaCS,
      description:
        "Practical training in programming, networking, and software development.",
      features: [
        "Programming Fundamentals",
        "Database Management",
        "Web Development",
        "Computer Networks",
      ],
    },
  ];

  const managementCourses = [
    {
      id: 1,
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      image: BbaImg,
      description:
        "Develops foundational business knowledge and managerial skills.",
      features: [
        "Principles of Management",
        "Business Economics",
        "Financial Accounting",
        "Marketing Management",
      ],
    },
    {
      id: 2,
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      image: MbaImg,
      description:
        "Develops managerial skills and business acumen for leadership positions.",
      features: [
        "Marketing Management",
        "Financial Management",
        "Human Resource Management",
        "Operations Management",
      ],
    },
    {
      id: 3,
      title: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      image: BcaImg,
      description:
        "Comprehensive understanding of commerce, accounting, and business laws.",
      features: [
        "Financial Accounting",
        "Business Law",
        "Economics",
        "Taxation",
      ],
    },
  ];

  const pharmacyCourses = [
    {
      id: 1,
      title: "Diploma in Pharmacy (D.Pharm)",
      duration: "2 Years",
      image: DpharmImg,
      description:
        "Foundation program in pharmaceutical sciences and pharmacy practice.",
      features: [
        "Pharmaceutics",
        "Pharmacology",
        "Pharmaceutical Chemistry",
        "Hospital Pharmacy",
      ],
    },
    {
      id: 2,
      title: "Bachelor of Pharmacy (B.Pharm)",
      duration: "4 Years",
      image: BpharmImg,
      description:
        "Comprehensive program in pharmaceutical sciences, drug formulation, and pharmacology.",
      features: [
        "Medicinal Chemistry",
        "Pharmacology",
        "Pharmaceutical Analysis",
        "Biopharmaceutics",
      ],
    },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "engineering":
        return {
          title: "College of Engineering DBGI, Saharanpur",
          subtitle:
            "Offering B.Tech programs in various engineering disciplines",
          courses: engineeringCourses,
        };
      case "computer_application":
        return {
          title: "College of Computer Application DBGI, Saharanpur",
          subtitle:
            "Offering Computer Application courses in both Undergraduate and Postgraduate level",
          courses: computerApplicationCourses,
        };
      case "polytechnic":
        return {
          title: "Dev Bhoomi Institute of Polytechnic, Saharanpur",
          subtitle:
            "Offering diploma programs in various engineering disciplines with industry-focused curriculum",
          courses: polytechnicCourses,
        };
      case "management":
        return {
          title: "Dev Bhoomi School of Professional Studies, Saharanpur",
          subtitle:
            "Offering undergraduate and postgraduate programs in business, computer applications, and commerce",
          courses: managementCourses,
        };
      case "pharmacy":
        return {
          title: "Dev Bhoomi College of Pharmacy, Saharanpur",
          subtitle:
            "Offering diploma and degree programs in pharmaceutical sciences",
          courses: pharmacyCourses,
        };
      default:
        return {
          title: "",
          subtitle: "",
          courses: [],
        };
    }
  };

  const { title, subtitle, courses } = getTabContent();

  return (
    <div>
      <Navbar />

      <section className="courses-hero">
        <div className="courses-container">
          <div className="courses-hero-content">
            <h1>Courses we are Offering</h1>
            <p>
              Explore our diverse range of undergraduate, postgraduate, and
              diploma programs designed to shape future leaders and innovators
            </p>
          </div>
        </div>
      </section>
      <section className="institutions">
        <div className="container">
          <div className="section-title">
            <h2>Our Institutions & Programs</h2>
            <p>
              Discover the wide range of academic programs offered across our
              constituent institutions
            </p>
          </div>

          <div className="institution-tabs">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="institution-content active">
            <div className="institution-header">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>

            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-img">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="course-content">
                    <h4>{course.title}</h4>
                    <span className="duration">{course.duration}</span>
                    <p>{course.description}</p>
                    <ul className="course-features">
                      {course.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/admission_form/admission.html" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose DBGI?</h2>
            <p>
              Discover what makes Dev Bhoomi Group of Institutions the preferred
              choice for quality education
            </p>
          </div>
          <div className="features-grid">
            <FeatureCard 
              iconImage= "fas fa-graduation-cap"
              title= "Experienced Faculty Members"
              description= "Learn from highly qualified and experienced faculty members dedicated to student success."
            />
            <FeatureCard 
              iconImage= "fas fa-flask"
              title= "Modern Laboratories"
              description= "State-of-the-art labs equipped with latest technology for practical learning and research."
            />
            <FeatureCard 
              iconImage= "fas fa-book"
              title= "Comprehensive Library"
              description= "Well-stocked library with extensive collection of books, journals, and digital resources."
            />
            <FeatureCard 
              iconImage= "fas fa-briefcase"
              title= "Industry Connections"
              description= "Strong industry partnerships for internships, projects, and placement opportunities."
            />
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

export default Courses;
