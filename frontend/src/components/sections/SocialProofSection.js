// SocialProofSection.js
import React from 'react';
import './SocialProofSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Blockchain Investor',
      text: 'TingResearch has saved me countless hours of research. Their project analyses are detailed yet easy to understand, and Ive found several promising investments thanks to their recommendations.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sophia Chen',
      role: 'Crypto Enthusiast',
      text: 'As someone new to blockchain, I was overwhelmed by all the information out there. TingResearch breaks everything down in a way thats accessible without being oversimplified. Their airdrop guides are especially helpful!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'DeFi Developer',
      text: 'What sets TingResearch apart is their attention to technical details while keeping the content approachable. Their analysis goes beyond hype and digs into the actual potential of projects.',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      name: 'Emma Watson',
      role: 'NFT Collector',
      text: 'The community TingResearch has built is incredible. Ive learned so much from both their content and discussions with other members. Its a valuable resource for anyone in the blockchain space.',
      avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="social-proof-section" id="testimonials">
      <div className="social-proof-container">
        <div className="section-header">
          <h2 className="section-title">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="section-subtitle">
            Hear from the people who use TingResearch to navigate the blockchain world
          </p>
        </div>
        
        <div className="testimonials-slider">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="community-stats">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Community Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Projects Analyzed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Airdrop Guides</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15K+</span>
            <span className="stat-label">Daily Readers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
