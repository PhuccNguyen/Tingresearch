// FeaturesSection.js
import React from 'react';
import './FeaturesSection.css';
import { FaChartLine, FaGift, FaNewspaper, FaUsers } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Core</span> Features
          </h2>
          <p className="section-subtitle">
            Discover how TingResearch can help you navigate the blockchain world
          </p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-item large">
            <div className="feature-icon project-analysis">
              <FaChartLine />
            </div>
            <h3>Project Analysis</h3>
            <p>In-depth analysis of promising blockchain projects with potential for growth. We research tokenomics, team background, technology, and market potential.</p>
            <a href="#project-analysis" className="feature-link">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="bento-item">
            <div className="feature-icon airdrop-guides">
              <FaGift />
            </div>
            <h3>Airdrop Guides</h3>
            <p>Step-by-step guides to participate in potential airdrops from emerging projects.</p>
            <a href="#airdrop-guides" className="feature-link">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="bento-item">
            <div className="feature-icon blockchain-news">
              <FaNewspaper />
            </div>
            <h3>Blockchain News</h3>
            <p>Up-to-date news and trends in the blockchain industry, simplified for all levels.</p>
            <a href="#blockchain-news" className="feature-link">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="bento-item large horizontal">
            <div className="feature-icon community-support">
              <FaUsers />
            </div>
            <div>
              <h3>Community & Support</h3>
              <p>Join our thriving community of blockchain enthusiasts. Get access to exclusive content, discussions, and support from experts and fellow members.</p>
              <a href="#community" className="feature-link">
                Join our community <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;