import React, { useRef, useEffect } from "react";
import "../styles/Home.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({
  headerScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  handleSearch,
  scrollToSection,
  headerRef,
}) => {
  const navRef = useRef(null);
  const mobileMenuBtnRef = useRef(null);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && 
        mobileMenuBtnRef.current &&
        !navRef.current.contains(event.target) && 
        !mobileMenuBtnRef.current.contains(event.target) && 
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Handle anchor click for smooth scrolling
  const handleAnchorClick = (e, href, isInternalLink = false) => {
    if (href.startsWith('#') && isInternalLink) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Close mobile menu if open
        setMobileMenuOpen(false);
        
        // Calculate header height offset
        const headerHeight = headerRef?.current?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div>
      <header className={headerScrolled ? "scrolled" : ""} ref={headerRef}>
        <div className="header-container">
          <div className="logo-container">
            <Link 
              to="/" 
              className="logo"
              onClick={(e) => {
                // Only handle smooth scroll if we're already on home page
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  handleAnchorClick(e, '#home', true);
                }
              }}
            >
              <img src={logo} alt="DBGI Logo" />
              <span>DBGI</span>
            </Link>
          </div>

          <div className="nav-main-wrapper" ref={navRef}>
            {/* Search Bar */}
            <div className="search-container">
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            {/* Navigation */}
            <nav className={`nav-container ${mobileMenuOpen ? "active" : ""}`}>
              <ul className="nav-links">
                <li>
                  <Link 
                    to="/" 
                    onClick={(e) => {
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        scrollToSection("home");
                      }
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pages/about-us"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pages/admission"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pages/courses"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://erp175.balajisolution.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Academics
                  </a>
                </li>
                <li>
                  <Link 
                    to="/pages/placements"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Placements
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#campus"
                    onClick={(e) => {
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        scrollToSection("campus");
                      }
                    }}
                  >
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pages/contact-us"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pages/career"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Career @DBGI
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pages/umeed"
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    Umeed
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              ref={mobileMenuBtnRef}
              className="mobile-menu-toggle"
              onClick={
                toggleMobileMenu
              }
              aria-label="Toggle menu"
            >
              <i
                className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
              ></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;