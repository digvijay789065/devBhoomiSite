import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  const [headerScrolled, setHeaderScrolled] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

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
      console.log("Searching for:", searchQuery);
    }
  };
  return (
    <div>
      <div className="notfound-container">
        
        {/* 404 Hero Section */}
        <section className="notfound-hero">
          <div className="container">
            <div className="notfound-content">
              {/* Animated 404 Text */}
              <div className="notfound-number">
                <span className="number-4">4</span>
                <div className="notfound-icon">
                  <div className="zero-circle">
                    <div className="inner-zero">
                      <div className="search-icon">🔍</div>
                    </div>
                  </div>
                </div>
                <span className="number-4">4</span>
              </div>

              {/* Main Message */}
              <h1 className="notfound-title">OOPS! PAGE NOT FOUND</h1>

              <p className="notfound-description">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>

            

              {/* Main CTA Button */}
              <div className="notfound-cta">
                <Link to="/" className="btn btn-large">
                  BACK TO HOME
                </Link>
              </div>

              
            </div>
          </div>
        </section>
</div>
    </div>
  );
};

export default NotFoundPage;
