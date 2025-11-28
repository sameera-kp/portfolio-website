import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-card">
        <h3>Front-end Developer Intern</h3>
        <p><strong>Company:</strong> UpCode Academy</p>
        <p><strong>Duration:</strong> Jan 2025 – Apr 2025</p>
        <ul>
          <li>Developed responsive web applications using React.js and Redux.</li>
          <li>Created reusable components to improve efficiency and maintainability.</li>
          <li>Implemented state management for complex UI interactions.</li>
          <li>Collaborated with designers and backend developers for seamless integration.</li>
          <li>Optimized application performance and responsiveness across devices.</li>
          <li>Participated in code reviews to maintain code quality.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;  // ✅ Must have this
