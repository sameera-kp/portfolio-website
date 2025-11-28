import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  const certificate = {
    title: "AI Bootcamp Certificate",
    issuer: "UpCode Academy, Sharjah",
    year: "2025",
    link: "https://certicloud.kiebot.com/certificates/c/688e8d05-7b32-4eae-a4bf-db257187f325/pdf/"
  };

  return (
    <section id="certifications">
      <h2>Certification</h2>
      <div className="cert-card">
        <h3>{certificate.title}</h3>
        <p><strong>Issuer:</strong> {certificate.issuer}</p>
        <p><strong>Year:</strong> {certificate.year}</p>
        {certificate.link && <a href={certificate.link} target="_blank" rel="noopener noreferrer">View Certificate</a>}
      </div>
    </section>
  );
};

export default Certifications;
