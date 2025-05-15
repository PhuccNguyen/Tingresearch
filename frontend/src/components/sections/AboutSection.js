// AboutSection.js
import React from 'react';
import './AboutSection.css';
import aboutImage from '../../assets/images/about-illustration.png';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="section-header">
            <h2 className="section-title">
              About <span className="gradient-text">TingResearch</span>
            </h2>
            <p className="section-subtitle">
              Your trusted guide in the blockchain ecosystem
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                TingResearch is a dynamic information hub dedicated to analyzing promising blockchain projects, providing simple and clear insights into potential airdrops, and delivering up-to-date news about the blockchain ecosystem. We aim to make blockchain knowledge accessible to everyone, from beginners to experts.
              </p>
            </div>
            
            <div className="about-values">
              <h3>Our Values</h3>
              <ul className="values-list">
                <li>
                  <span className="value-icon">🔍</span>
                  <div className="value-content">
                    <h4>Thorough Research</h4>
                    <p>We conduct in-depth analysis to provide you with accurate information.</p>
                  </div>
                </li>
                <li>
                  <span className="value-icon">🎯</span>
                  <div className="value-content">
                    <h4>Actionable Insights</h4>
                    <p>Our content focuses on practical steps and clear guidance.</p>
                  </div>
                </li>
                <li>
                  <span className="value-icon">🤝</span>
                  <div className="value-content">
                    <h4>Community Focus</h4>
                    <p>We prioritize building and supporting our user community.</p>
                  </div>
                </li>
                <li>
                  <span className="value-icon">🔒</span>
                  <div className="value-content">
                    <h4>Educational Integrity</h4>
                    <p>We present information in an unbiased and educational manner.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img src={aboutImage} alt="About TingResearch" />
          <div className="about-image-backdrop"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
