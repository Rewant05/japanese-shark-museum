import React, { useEffect } from 'react';
import { siteData } from '../config/siteData';
import SpeciesCard from '../components/SpeciesCard';
import './SpeciesGuide.css';

const SpeciesGuide: React.FC = () => {
  const pageTitle = siteData.navigation.find((item) => item.path === '/species')?.label ?? 'Species Guide';

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    if (prefersReducedMotion || !isDesktop) return;

    let isCancelled = false;
    let cleanupAnimation: (() => void) | undefined;

    const loadAnimation = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (isCancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const cards = document.querySelectorAll('.species-grid-item');

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          },
        );
      });

      cleanupAnimation = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    void loadAnimation();

    return () => {
      isCancelled = true;
      cleanupAnimation?.();
    };
  }, []);

  return (
    <div className="species-page">
      <div className="page-header species-header">
        <div className="container">
          <h1 className="page-title">{pageTitle}</h1>
          <p className="page-subtitle">{siteData.tagline}</p>
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
