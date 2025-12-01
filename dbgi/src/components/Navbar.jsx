import React from "react";
import Logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="h-[10vh] w-full bg-linear-to-r from-yellow-300 to-red-600 
                flex items-center justify-between px-10">
      {/*logo*/}
      <div className="h-[8vh]">
        <img
          className="h-full drop-shadow-xl drop-shadow-black/30"
          src={Logo}
          alt="dbgi logo"
        />
      </div>

      {/* nav-links */}
      <div>
        <ul className="text-white font-bold flex gap-10">
          <li>
            <Link to="/" className="active outline-none">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="outline-none">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Admissions
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Academics
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Placements
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Campus Life
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Career @DBGI
            </a>
          </li>
          <li>
            <a href="#" className="outline-none">
              Umeed
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
