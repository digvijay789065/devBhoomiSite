import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactCards from "../components/ContactCards";
import Footer from "../components/Footer";
import ApplyNow from "../components/ApplyNow";

const ContactUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [headerScrolled, setHeaderScrolled] = useState(false);

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
      <Hero heading="Contact Details" />
      <ContactCards />
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

export default ContactUs;
