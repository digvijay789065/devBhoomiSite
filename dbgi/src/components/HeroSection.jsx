import React from "react";
import HeroImage from "../../public/hero-image.webp";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url('/hero-image.webp')] h-[90vh] bg-cover bg-center">
        <div className="bg-[linear-gradient(rgba(0,0,255,0.6),rgba(0,0,255,0.65))] h-[90vh] opacity-70">
          <div className="flex items-center justify-center">
            
            <div className="text-white h-full w-[60vw]">
              <h1 className="text-5xl font-bold">Shape Your Future With Excellence</h1>
              <p className="text-xl">
                Join our vibrant community of learners and innovators at Dev
                Bhoomi Group of Institutions, where we nurture talent and foster
                success through world-class education.
              </p>
              
              <div class="hero-btns">
                <a href="#programs" class="btn">
                  Explore Programs
                </a>
                <a href="admission_form/admission.html" class="btn btn-outline">
                  Apply Now
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
