import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactCards from '../components/ContactCards'
import Footer from '../components/Footer'
import ApplyNow from '../components/ApplyNow'
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Contact Details"
      />
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
  )
}

export default ContactUs
