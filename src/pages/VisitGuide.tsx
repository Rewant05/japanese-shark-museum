import React from 'react';
import { siteData } from '../config/siteData';
import { Clock, CalendarOff, MapPin, Accessibility, Info } from 'lucide-react';
import './VisitGuide.css';

const VisitGuide: React.FC = () => {
  const guide = siteData.visitGuide;

  return (
    <div className="visit-page">
      <div className="page-header visit-header">
        <div className="container">
          <h1 className="page-title">来館ガイド</h1>
          <p className="page-subtitle">ご来館前にご確認ください</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="visit-grid">
            <div className="visit-info-card">
              <h3><Clock size={24} /> 開館時間</h3>
              <p>{guide.hours}</p>
            </div>
            
            <div className="visit-info-card">
              <h3><CalendarOff size={24} /> 休館日</h3>
              <p>{guide.closed}</p>
            </div>
            
            <div className="visit-info-card">
              <h3><MapPin size={24} /> アクセス</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{guide.access}</p>
            </div>
            
            <div className="visit-info-card">
              <h3><Accessibility size={24} /> バリアフリー・設備</h3>
              <p>{guide.accessibility}</p>
            </div>
          </div>
          
          <div className="visit-details">
            <div className="detail-section">
              <h2>おすすめの巡り方</h2>
              <p>{guide.recommendedRoute}</p>
            </div>
            
            <div className="detail-section">
              <h2>親子での見学</h2>
              <p>{guide.family}</p>
            </div>
            
            <div className="detail-section">
              <h2>館内での注意事項</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{guide.rules}</p>
            </div>
          </div>
          
          <div className="visit-disclaimer">
            <Info size={24} style={{ marginBottom: '1rem', color: 'var(--color-danger-red)' }} />
            <p>{siteData.disclaimer}</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>※実際のチケット販売・予約システムはございません。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitGuide;
