import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/tingresearch-logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="TingResearch Logo" className="logo" />
          </a>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="https://docs.tingresearch.com/" target="_blank" rel="noopener noreferrer">Docs</a></li>
          </ul>
        </nav>
        
        <div className="header-cta">
          <a href="#cta" className="cta-button">Join Community</a>
        </div>
        
        <div 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;