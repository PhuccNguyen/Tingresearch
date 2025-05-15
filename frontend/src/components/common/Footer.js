import React from 'react';
import './Footer.css';
import logo from '../../assets/tingresearch-logo.png';
import { FaTelegramPlane, FaTwitter, FaFacebookF, FaYoutube, FaBitcoin  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="TingResearch Logo" />
            <p>A dynamic information hub dedicated to analyzing promising blockchain projects, providing insights into potential airdrops, and delivering up-to-date news.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://docs.tingresearch.com/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#disclaimer">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3>Subscribe to Newsletter</h3>
            <p>Stay updated with our latest news and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://t.me/TingResearch" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="https://x.com/TingResearch" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/TingResearch" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@TingResearchs" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://coinmarketcap.com/community/profile/TingResearch/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="CoinMarketCap">
              <FaBitcoin />
            </a>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} TingResearch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
