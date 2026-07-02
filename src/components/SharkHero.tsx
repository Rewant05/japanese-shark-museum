import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../config/siteData';
import { ChevronDown } from 'lucide-react';
import './SharkHero.css';

gsap.registerPlugin(ScrollTrigger);

const SharkHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const upperJawRef = useRef<HTMLDivElement>(null);
  const lowerJawRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate if the user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
      }
    });

    // Animate the shark components
    tl.to(bodyRef.current, {
      scale: 1.2,
      y: '5%',
      ease: 'power1.inOut'
    }, 0)
    .to(upperJawRef.current, {
      y: '-20%',
      ease: 'power1.inOut'
    }, 0.2)
    .to(lowerJawRef.current, {
      y: '20%',
      ease: 'power1.inOut'
    }, 0.2)
    .to(textRef.current, {
      opacity: 0,
      y: '-50px',
      ease: 'power1.in'
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="ocean-bg"></div>
      
      {/* Abstract Shark Layers */}
      <div className="shark-wrapper" ref={bodyRef}>
        <div className="shark-upper-jaw" ref={upperJawRef}>
           {/* Stylized teeth SVG */}
           <svg className="teeth teeth-upper" viewBox="0 0 100 20" preserveAspectRatio="none">
             <path d="M0,0 L10,20 L20,0 L30,20 L40,0 L50,20 L60,0 L70,20 L80,0 L90,20 L100,0 Z" fill="var(--color-bone-white)"/>
           </svg>
        </div>
        
        <div className="shark-inner-mouth"></div>
        
        <div className="shark-lower-jaw" ref={lowerJawRef}>
           {/* Stylized teeth SVG */}
           <svg className="teeth teeth-lower" viewBox="0 0 100 20" preserveAspectRatio="none">
             <path d="M0,20 L10,0 L20,20 L30,0 L40,20 L50,0 L60,20 L70,0 L80,20 L90,0 L100,20 Z" fill="var(--color-bone-white)"/>
           </svg>
        </div>
      </div>

      <div className="hero-content" ref={textRef}>
        <h1 className="hero-title">「海の支配者を、<br/>もっと正確に知る。」</h1>
        <p className="hero-subtitle">{siteData.description}</p>
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <ChevronDown className="scroll-arrow" size={24} />
        </div>
      </div>
    </div>
  );
};

export default SharkHero;
