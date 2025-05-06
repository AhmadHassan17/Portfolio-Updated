import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Make sure this file exists in the same directory

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    emailSubject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link className="nav-brand" to="/">Ahmad Hassan</Link>
          <button className="nav-toggle" aria-label="Toggle navigation">
            <span className="toggle-icon"></span>
          </button>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/aboutme">About me</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <section className="contact-section">
        <h2>Contact <span>Me!</span></h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Subject"
                name="emailSubject"
                value={formData.emailSubject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;