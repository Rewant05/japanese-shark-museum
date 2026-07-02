import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteMeta } from '../config/siteMeta';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigationClassName = `navigation ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`;

  const handleNavLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

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
    <header className={navigationClassName}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleNavLinkClick}>
          {siteMeta.websiteName}
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            {siteMeta.navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/exhibits" className="btn-primary nav-cta" onClick={handleNavLinkClick}>
            展示を見る
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="mobile-toggle-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {siteMeta.navigation.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={handleNavLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/exhibits" className="btn-primary mobile-cta" onClick={handleNavLinkClick}>
              展示を見る
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
