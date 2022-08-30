import React from "react";
import '/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/contactSection/ContactSection.css'

const ContactSection = () => {

    return (
      <div className="contact-container">
        <div className="text-center">
        <h2 data-aos="fade-up">CONTACT ME</h2>
        <h3 data-aos="fade-left">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="form-div">
      <form>
        <input placeholder="Your Name"/>
        <input placeholder="Your Email"/>
        <input placeholder="Your Phone"/>
        <textarea placeholder="Your Message"/>
      </form>
      </div>
      </div>  
    )
}

export default ContactSection;