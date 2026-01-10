import React from "react";
import "../styles/Home.css";

const Navbar = ({
  headerScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  handleSearch,
  scrollToSection,
  logo,
}) => {
  return (
    <div>
      <header className={headerScrolled ? "scrolled" : ""}>
        <div className="header-container">
          <div className="logo-container">
            <a
              href="#home"
              className="logo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <img src={logo} alt="DBGI Logo" />
              <span>DBGI</span>
            </a>
          </div>

          <div className="nav-main-wrapper">
            {/* Search Bar */}
            <div className="search-container">
              <form className="search-form" onSubmit={handleSearch}>
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
                {[
                  {
                    label: "Home",
                    href: "#home",
                    onClick: () => scrollToSection("home"),
                  },
                  { label: "About Us", href: "#", external: true },
                  { label: "Admissions", href: "#", external: true },
                  { label: "Courses", href: "#", external: true },
                  {
                    label: "Academics",
                    href: "https://erp175.balajisolution.in/",
                    external: true,
                  },
                  { label: "Placements", href: "#", external: true },
                  {
                    label: "Campus Life",
                    href: "#campus",
                    onClick: () => scrollToSection("campus"),
                  },
                  {
                    label: "Contact Us",
                    href: "#contact",
                    onClick: () => scrollToSection("contact"),
                  },
                  { label: "Career @DBGI", href: "#", external: true },
                  { label: "Umeed", href: "#", external: true },
                ].map((item, index) => (
                  <li key={index}>
                    {item.onClick ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          item.onClick();
                        }}
                        className={index === 0 ? "active" : ""}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        rel={item.external ? "noopener noreferrer" : ""}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
