import React, { useEffect } from 'react';
import { siteData } from '../config/siteData';
import SpeciesCard from '../components/SpeciesCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SpeciesGuide.css';

gsap.registerPlugin(ScrollTrigger);

const SpeciesGuide: React.FC = () => {
  
  useEffect(() => {
    // Add staggered reveal animation to species cards
    const cards = document.querySelectorAll('.species-grid-item');
    
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="species-page">
      <div className="page-header species-header">
        <div className="container">
          <h1 className="page-title">サメ図鑑</h1>
          <p className="page-subtitle">世界の海に生息する多様な種を学ぶ</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="species-grid">
            {siteData.sharkSpecies.map((species) => (
              <div key={species.id} className="species-grid-item">
                <SpeciesCard species={species} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeciesGuide;
