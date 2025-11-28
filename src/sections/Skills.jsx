import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = ["React.js", "Redux", "JavaScript", "HTML5", "CSS3"];
  return (
    <section id="skills" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Skills</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {skills.map((skill, index) => <SkillCard key={index} skill={skill} />)}
      </div>
    </section>
  );
};

export default Skills;
