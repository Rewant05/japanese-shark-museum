import React, { useEffect } from 'react';
import { siteData } from '../config/siteData';
import ExhibitCard from '../components/ExhibitCard';
import './Exhibits.css';

const Exhibits: React.FC = () => {
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

      const exhibits = document.querySelectorAll('.exhibit-wrapper');

      exhibits.forEach((exhibit) => {
        gsap.fromTo(exhibit,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: exhibit,
              start: 'top 80%',
            }
          }
        );
      });

      cleanupAnimation = () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    };

    void loadAnimation();

    return () => {
      isCancelled = true;
      cleanupAnimation?.();
    };
  }, []);

  return (
    <div className="exhibits-page">
      <div className="page-header exhibits-header">
        <div className="container">
          <h1 className="page-title">展示案内</h1>
          <p className="page-subtitle">最新の科学と展示手法で、深海の世界へ</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="exhibits-intro">
            <p>
              鮫海博物館では、単に見るだけでなく「体感する」展示を心がけています。<br/>
              最新の映像技術、精密な骨格標本、そして触れる化石など、多様なアプローチでサメの生態に迫ります。
            </p>
          </div>
          
          <div className="exhibits-list">
            {siteData.exhibits.map((exhibit) => (
              <div key={exhibit.id} className="exhibit-wrapper">
                <ExhibitCard exhibit={exhibit} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibits;
