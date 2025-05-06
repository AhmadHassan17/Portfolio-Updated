import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => (
  <>
    <Header />
    <section className="hero container-fluid d-flex align-items-center justify-content-between">
      <div className="hero-text">
        <h1>Hi, I'm <span>Ahmad Hassan</span></h1>
        <h2>Computer Scientist</h2>
        <p>A dedicated Computer scientist who loves turning ideas into reality through code. Passionate about problem-solving and innovation.</p>

        <div className="hero-buttons d-flex">
          <a href="/AhmadHassan-CV.pdf" className="btn btn-primary hire-btn" target="_blank">Hire Me 💼</a>
          <a href="/contact" className="btn btn-outline-light talk-btn">Let’s Talk</a>
        </div>

        <div className="social-icons mt-4">
          <a href="https://www.instagram.com/ahmadhasssan_" target="_blank" rel="noreferrer"><img src="/images/instagram-icon.png" alt="Instagram" /></a>
          <a href="https://github.com/AhmadHassan17" target="_blank" rel="noreferrer"><img src="/images/github-icon.png" alt="GitHub" /></a>
          <a href="http://www.linkedin.com/in/ahmadhassann17" target="_blank" rel="noreferrer"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hehe.png" alt="Profile" />
      </div>
    </section>
  </>
);

export default Home;
