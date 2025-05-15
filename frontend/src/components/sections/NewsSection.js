// NewsSection.js
import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Top 5 Promising Layer 1 Blockchain Projects to Watch in 2025',
      excerpt: 'Our analysis of the most innovative Layer 1 blockchain projects with high growth potential for the coming year.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      date: 'April 28, 2025',
      category: 'Project Analysis',
      link: '#news-1'
    },
    {
      title: 'Complete Guide: How to Participate in the Upcoming XYZ Protocol Airdrop',
      excerpt: 'Step-by-step instructions to qualify for the highly anticipated XYZ Protocol airdrop, expected to be one of the largest this year.',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      date: 'April 15, 2025',
      category: 'Airdrop Guide',
      link: '#news-2'
    },
    {
      title: 'Market Analysis: How Recent Regulatory Changes Will Impact DeFi Innovation',
      excerpt: 'An in-depth look at the latest regulatory developments and their potential influence on decentralized finance projects.',
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      date: 'April 3, 2025',
      category: 'Market Trends',
      link: '#news-3'
    }
  ];

  return (
    <section className="news-section" id="news">
      <div className="news-container">
        <div className="section-header">
          <h2 className="section-title">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="section-subtitle">
            Stay updated with our latest analyses, guides, and blockchain news
          </p>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div className="news-card" key={index}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-category">{item.category}</div>
              </div>
              <div className="news-content">
                <div className="news-date">{item.date}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href={item.link} className="news-link">
                  Read More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="news-cta">
          <a href="#all-news" className="view-all-button">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
