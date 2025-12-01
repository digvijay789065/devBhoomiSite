import React from "react";
import HeroImage from "../../public/hero-image.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}>
        <section
          className="w-full min-h-screen 
                bg-[linear-gradient(rgba(0,0,255,0.5),rgba(0,0,255,0.55))] 
                bg-cover bg-center flex flex-col items-center justify-center text-center p-4 md:p-10">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Shape Your Future With Excellence
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-2xl">
            Join our vibrant community of learners and innovators at Dev Bhoomi
            Group of Institutions, where we nurture talent and foster success
            through world-class education.
          </p>

          <div className="flex gap-4 mt-6 flex-col sm:flex-row">
            <Link to={''} className="btn">Explore Programs</Link>
            <Link to={''} className="btn btn-outline">Apply Now</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
