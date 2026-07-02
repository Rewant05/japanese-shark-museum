import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { Mail, MapPin, Clock } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">{siteData.websiteName}</h2>
            <p className="footer-tagline">{siteData.tagline}</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h3>メニュー</h3>
              <ul>
                {siteData.navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>ご案内</h3>
              <ul className="footer-contact">
                <li><MapPin size={16} /> <span>{siteData.address}</span></li>
                <li><Clock size={16} /> <span>{siteData.businessHours}</span></li>
                <li><Mail size={16} /> <a href={`mailto:${siteData.email}`}>{siteData.email}</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>法的情報</h3>
              <ul>
                {siteData.footerLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="footer-social">
                <a href={siteData.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  IG
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-disclaimer">{siteData.disclaimer}</p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {siteData.romanizedName}. All rights reserved. (Fictional Museum Concept)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
