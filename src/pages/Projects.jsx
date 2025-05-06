import React from 'react';
import './Projects.css'; // Create this CSS file or move styles from projects.css
import portImage from '../assets/images/port.webp';
import gameImage from '../assets/images/game.jpeg';
import databaseImage from '../assets/images/database.jpeg';
import chessImage from '../assets/images/chess.jpeg';
import libraryImage from '../assets/images/library.webp';
import snakeImage from '../assets/images/snake.jpg';

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      image: portImage,
      description: 'A modern, responsive portfolio website with a clean and playful design.',
    },
    {
      title: 'Survival Game',
      image: gameImage,
      description: 'A 2D game built with C# and Unity, featuring custom game mechanics.',
    },
    {
      title: 'Online Appointment Booking System',
      image: databaseImage,
      description: 'A well-structured database system for a university project with SQL and normalization.',
    },
    {
      title: 'Chess Game',
      image: chessImage,
      description: 'A 2D platformer game built with C# and Unity, featuring custom game mechanics.',
    },
    {
      title: 'Library Management System',
      image: libraryImage,
      description: 'An efficient management system designed with SQL and UI principles.',
    },
    {
      title: 'Snake Game',
      image: snakeImage,
      description: 'A retro-inspired 2D game created in Unity with real-time collision handling.',
    },
  ];

  return (
    <section className="projects-section container py-5">
      <h2 className="section-title text-center mb-5">
        My <span>Projects</span>
      </h2>
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card project-card shadow-sm h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
