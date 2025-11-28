import React from "react";
import "../styles/Hero.css";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <img src={profilePic} alt="Sameera Manaf" />
      <h1>Hi, I’m Sameera Manaf</h1>
      <p>Front-end Developer | React & Redux</p>
      <p>
        Email: <a href="mailto:zakraya60@gmail.com">zakraya60@gmail.com</a> | 
        Phone: +971585133244 | 
        <a href="https://www.linkedin.com/in/sameera-manaf-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </section>
  );
};

export default Hero;
