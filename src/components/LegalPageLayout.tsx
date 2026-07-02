import React from 'react';
import { siteData } from '../config/siteData';
import './LegalPageLayout.css';

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated = "2024年4月1日", sections }) => {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1 className="legal-title">{title}</h1>
        <p className="legal-date">最終更新日: {lastUpdated}</p>
      </div>
      
      <div className="legal-content">
        {sections.map((section, index) => (
          <section key={index} className="legal-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
        
        <div className="legal-disclaimer">
          <p><strong>【重要】</strong> {siteData.disclaimer}</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
