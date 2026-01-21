import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactCards from '../components/ContactCards'
import Footer from '../components/Footer'
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Contact Details"
      />
      <ContactCards />
      <Footer />
    </div>
  )
}

export default ContactUs
