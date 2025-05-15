// BenefitsSection.js
import React from 'react';
import './BenefitsSection.css';
import { FaClock, FaRocket, FaShieldAlt, FaLightbulb, FaChartLine } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaClock />,
      title: 'Save Research Time',
      description: 'Our expert analysis saves you countless hours of research, helping you focus on the most promising opportunities.',
      color: '#4de8c2'
    },
    {
      icon: <FaRocket />,
      title: 'Early Opportunities',
      description: 'Discover emerging projects and airdrops early, positioning yourself ahead of the market.',
      color: '#2d8bd8'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk Mitigation',
      description: 'Comprehensive reviews help you identify and avoid potential scams and high-risk projects.',
      color: '#9b65de'
    },
    {
      icon: <FaLightbulb />,
      title: 'Simplified Knowledge',
      description: 'Complex blockchain concepts explained in simple, accessible language for all expertise levels.',
      color: '#ff7e5f'
    },
    {
      icon: <FaChartLine />,
      title: 'Strategic Insights',
      description: 'Gain deeper understanding of market trends and project potential to make informed decisions.',
      color: '#feb47b'
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Why Choose</span> TingResearch
          </h2>
          <p className="section-subtitle">
            Discover the advantages that make TingResearch your ideal blockchain companion
          </p>
        </div>
        
        <div className="benefits-cards">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon" style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}>
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
