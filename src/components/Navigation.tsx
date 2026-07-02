import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {siteData.websiteName}
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            {siteData.navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/exhibits" className="btn-primary nav-cta">
            展示を見る
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {siteData.navigation.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/exhibits" className="btn-primary mobile-cta">
              展示を見る
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
