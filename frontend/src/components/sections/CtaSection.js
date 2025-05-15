// MainCtaSection.js
import React from 'react';
import './MainCtaSection.css';
import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';

const MainCtaSection = () => {
  return (
    <section className="main-cta-section" id="cta">
      <div className="main-cta-container">
        <div className="main-cta-content">
          <h2>Ready to Explore the Blockchain World?</h2>
          <p>Join our community today and stay updated with the latest blockchain projects, airdrop opportunities, and industry news.</p>
          
          <div className="cta-channels">
            <a href="https://t.me/tingresearch" target="_blank" rel="noopener noreferrer" className="channel-button telegram">
              <FaTelegram className="channel-icon" />
              <span>Join Telegram</span>
            </a>
            <a href="https://twitter.com/tingresearch" target="_blank" rel="noopener noreferrer" className="channel-button twitter">
              <FaTwitter className="channel-icon" />
              <span>Follow on Twitter</span>
            </a>
            <a href="https://discord.gg/tingresearch" target="_blank" rel="noopener noreferrer" className="channel-button discord">
              <FaDiscord className="channel-icon" />
              <span>Join Discord</span>
            </a>
          </div>
          
          <div className="newsletter-signup">
            <h3>Or subscribe to our newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="cta-background">
        <div className="cta-gradient-1"></div>
        <div className="cta-gradient-2"></div>
        <div className="cta-particles"></div>
      </div>
    </section>
  );
};

export default MainCtaSection;
