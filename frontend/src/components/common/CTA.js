import React from 'react';
import './CTA.css';

const CTA = ({ title, subtitle, buttonText, buttonLink, type = 'primary' }) => {
  return (
    <div className={`cta-container ${type}`}>
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a href={buttonLink} className="cta-button">
          {buttonText}
          <span className="arrow-icon">→</span>
        </a>
      </div>
    </div>
  );
};

export default CTA;