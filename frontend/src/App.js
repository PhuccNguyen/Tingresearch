import React from 'react';
import './App.css';
import Header from './components/common/Header'; // Đảm bảo đúng đường dẫn
import CTA from './components/common/CTA';       // Đảm bảo có component CTA
import Footer from './components/common/Footer';
import Hero from './components/sections/HeroSection';
import Features from './components/sections/FeaturesSection';
import AboutSection from './components/sections/AboutSection';
import Benefit from './components/sections/BenefitsSection';
import Social from './components/sections/SocialProofSection';
import CtaSection from './components/sections/CtaSection';
import NewsSection from './components/sections/NewsSection';



function App() {
  return (
    <div className="app">
      <Header />
      <main>
      <Hero />
            <CTA 
        title="Join the Blockchain Revolution"
        subtitle="Stay ahead in the blockchain world with our insights and community."
        buttonText="Get Started"
        buttonLink="#cta"
        type="primary"
      />  
      <AboutSection />
      <Features />
      <Benefit />
      <Social />
      <NewsSection />
      <CtaSection />    
      </main>
      <Footer />
    </div>
  );
}

export default App;


