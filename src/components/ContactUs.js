// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import the associated CSS file

const ContactUs = () => {
  return (
    <>
    <h2 className='heading'>Contact Us</h2>
    <div className="contact-us-container">
      
      <div className="contact-card">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
