import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { FaChartLine, FaGift, FaNewspaper } from 'react-icons/fa';

const HeroSection = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      
      if (heroElement) {
        // Parallax effect for background elements
        const parallaxElements = heroElement.querySelectorAll('.parallax');
        parallaxElements.forEach((el, index) => {
          const speed = 0.2 + (index * 0.1);
          el.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animation for stats counters
    const statsElements = document.querySelectorAll('.hero-stat-number');
    statsElements.forEach(el => {
      const targetValue = parseInt(el.textContent);
      animateValue(el, 0, targetValue, 2000);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to animate counter
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + '+';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Blockchain Analysis Platform</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Discover</span> The Future of <br /> 
            Blockchain With <span className="text-highlight">TingResearch</span>
          </h1>
          
          <p className="hero-subtitle">
            Your comprehensive platform for blockchain project analysis, 
            airdrop guides, and the latest industry news.
          </p>
          
          <div className="hero-cta-group">
            <a href="#features" className="hero-cta-primary">
              Explore Features
              <span className="hero-cta-icon">→</span>
            </a>
            <a href="https://docs.tingresearch.com/" target="_blank" rel="noopener noreferrer" className="hero-cta-secondary">
              View Documentation
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-number">100</span>
              <span className="hero-stat-label">Projects Analyzed</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">50</span>
              <span className="hero-stat-label">Community Members</span>
              <span className="hero-stat-unit">K</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">200</span>
              <span className="hero-stat-label">Airdrop Guides</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="blockchain-animation">
            <div className="blockchain-mesh"></div>
            
            <div className="blockchain-nodes">
              <div className="node node-1">
                <div className="node-icon">
                  <FaChartLine />
                </div>
                <div className="node-pulse"></div>
              </div>
              <div className="node node-2">
                <div className="node-icon">
                  <FaGift />
                </div>
                <div className="node-pulse"></div>
              </div>
              <div className="node node-3">
                <div className="node-icon">
                  <FaNewspaper />
                </div>
                <div className="node-pulse"></div>
              </div>
              
              <div className="blockchain-line line-1"></div>
              <div className="blockchain-line line-2"></div>
              <div className="blockchain-line line-3"></div>
            </div>
            
            <div className="data-flow">
              <div className="data-particle p1"></div>
              <div className="data-particle p2"></div>
              <div className="data-particle p3"></div>
              <div className="data-particle p4"></div>
              <div className="data-particle p5"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="hero-gradient-1 parallax"></div>
        <div className="hero-gradient-2 parallax"></div>
        <div className="hero-particles"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
