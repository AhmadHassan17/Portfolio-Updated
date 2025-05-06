import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg custom-nav">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Ahmad Hassan</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/aboutme">About Me</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/education">Education</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
