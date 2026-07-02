
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import './App.css';

const About = lazy(() => import('./pages/About'));
const SpeciesGuide = lazy(() => import('./pages/SpeciesGuide'));
const Exhibits = lazy(() => import('./pages/Exhibits'));
const Conservation = lazy(() => import('./pages/Conservation'));
const VisitGuide = lazy(() => import('./pages/VisitGuide'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/species" element={<SpeciesGuide />} />
              <Route path="/exhibits" element={<Exhibits />} />
              <Route path="/conservation" element={<Conservation />} />
              <Route path="/visit" element={<VisitGuide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
