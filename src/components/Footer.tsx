import React from 'react';
import { Link } from 'react-router-dom';
import { siteMeta } from '../config/siteMeta';
import './Footer.css';

const Footer: React.FC = () => {
  const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">{siteMeta.websiteName}</h2>
            <p className="footer-tagline">{siteMeta.tagline}</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h3>メニュー</h3>
              <ul>
                {siteMeta.navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleFooterLinkClick}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>ご案内</h3>
              <ul className="footer-contact">
                <li><span className="footer-contact-icon" aria-hidden="true">〒</span> <span>{siteMeta.address}</span></li>
                <li><span className="footer-contact-icon" aria-hidden="true">時</span> <span>{siteMeta.businessHours}</span></li>
                <li><span className="footer-contact-icon" aria-hidden="true">@</span> <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>法的情報</h3>
              <ul>
                {siteMeta.footerLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleFooterLinkClick}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="footer-social">
                <a href={siteMeta.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  IG
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-disclaimer">{siteMeta.disclaimer}</p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {siteMeta.romanizedName}. All rights reserved. (Fictional Museum Concept)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
