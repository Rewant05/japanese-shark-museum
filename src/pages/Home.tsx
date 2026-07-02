import React from 'react';
import SharkHero from '../components/SharkHero';
import { homeHighlights } from '../config/homeHighlights';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <SharkHero />
      
      <section className="section intro-section">
        <div className="container intro-container">
          <h2 className="section-title">サメとは何か？</h2>
          <p className="intro-text">
            4億年以上前から地球の海を泳ぎ続ける彼らは、恐竜よりも長い歴史を持つ進化の成功者です。<br/>
            冷酷な殺し屋というイメージは、彼らの真の姿のほんの一部に過ぎません。<br/>
            生態系の頂点捕食者として海を豊かに保つ、その美しくも精巧なメカニズムに迫ります。
          </p>
          <div className="intro-actions">
            <Link to="/about" className="btn-secondary">
              博物館について <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section highlights-section">
        <div className="container">
          <h2 className="section-title">注目の展示</h2>
          <div className="highlights-grid">
            {homeHighlights.map((exhibit) => (
              <div key={exhibit.id} className="highlight-card">
                <h3>{exhibit.title}</h3>
                <p>{exhibit.shortDescription}</p>
                <Link to={`/exhibits#${exhibit.id}`} className="highlight-link">
                  詳細を見る <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="center-action" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/exhibits" className="btn-primary">
              すべての展示を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
