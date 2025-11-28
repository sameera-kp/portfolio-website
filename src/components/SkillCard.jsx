// src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div style={cardStyle}>
      <h3>{skill}</h3>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px 20px",
  margin: "10px",
  minWidth: "120px",
  textAlign: "center",
  backgroundColor: "#f7f7f7",
  boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
};

export default SkillCard;
