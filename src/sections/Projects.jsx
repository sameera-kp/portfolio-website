import React from "react";
import "../styles/Projects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce-app",
      description: "A personal portfolio to showcase projects and skills.",
      tools: "React, CSS, HTML",
      img: project1,
      github: "https://github.com/sameera-kp/ecommerce-app.git",
      demo: "#",
    },
    {
      title: "E-commerce App React",
      description: "A full-featured e-commerce application built with React and Redux.",
      tools: "React, Redux, CSS, JavaScript",
      img: project2,
      github: "https://github.com/sameera-kp/ecommerce-app-react.git",
      demo: "#",
    },
     {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects, skills, and experience.",
      tools: "React, CSS, HTML",
      img: project3,
      github: "https://github.com/sameera-kp/portfolio-website.git",
      demo: "#",
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.demo !== "#" && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
