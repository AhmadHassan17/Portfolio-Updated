import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutme.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link className="nav-brand" to="/">Ahmad Hassan</Link>
          <button className="nav-toggle" aria-label="Toggle navigation">
            <span className="toggle-icon">☰</span>
          </button>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/aboutme">About me</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Me Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About <span>Me</span></h2>
            <p>Hello! I'm Ahmad Hassan, a passionate computer science student and an aspiring developer. I love turning creative ideas into interactive and efficient code. Whether it's building sleek websites, developing games, or designing databases — I thrive on learning and creating!</p>
            <p>With a strong foundation in programming and a playful approach to problem-solving, I aim to build user-friendly, innovative, and impactful digital solutions. Let's connect and create something amazing!</p>
            <a href="/AhmadHassan-CV.pdf" className="primary-btn" target="_blank" rel="noopener noreferrer">Download CV 📄</a>
          </div>
          <div className="about-image">
            <img src="/images/profile4.png" alt="Ahmad Hassan" className="profile-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;