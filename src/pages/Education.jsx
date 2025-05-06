import React from 'react';
import './Education.css'; // You must create this CSS file manually

const Education = () => {
  return (
    <section className="education-section container py-5">
      <h2 className="section-title text-center mb-5">
        My <span>Journey</span>
      </h2>

      <div className="row">
        {/* Education Column */}
        <div className="col-md-6">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2023 - Present</span>
              <h4>Bachelor of Science in Computer Science</h4>
              <p>Information Technology University Lahore, Pakistan</p>
              <p>Focusing on algorithms, data structures, and software development.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2020 - 2022</span>
              <h4>Intermediate</h4>
              <p>Divisional Public School and Inter College Sahiwal, Pakistan</p>
              <p>Scored 90% marks in Intermediate.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2018 - 2020</span>
              <h4>Matriculation</h4>
              <p>Divisional Public School and Inter College Sahiwal, Pakistan</p>
              <p>Scored 95% marks in Matriculation.</p>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="col-md-6">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2025</span>
              <h4>Web Development</h4>
              <p>ITU Lahore</p>
              <p>Worked on front-end design and responsive web apps with HTML, CSS, and Bootstrap.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2024 - Present</span>
              <h4>Freelance Game Developer</h4>
              <p>Self-employed</p>
              <p>Created engaging 2D and 3D games, focusing on performance and storytelling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
