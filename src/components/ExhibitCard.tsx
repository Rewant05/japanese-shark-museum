import React from 'react';
import './ExhibitCard.css';

interface ExhibitProps {
  exhibit: {
    id: string;
    title: string;
    shortDescription: string;
    learningGoal: string;
    featuredSpecies: string;
    recommendedAudience: string;
  }
}

const ExhibitCard: React.FC<ExhibitProps> = ({ exhibit }) => {
  return (
    <div className="exhibit-card" id={exhibit.id}>
      <h3 className="exhibit-title">{exhibit.title}</h3>
      <p className="exhibit-desc">{exhibit.shortDescription}</p>
      
      <div className="exhibit-meta">
        <div className="meta-block">
          <h4>学習目標</h4>
          <p>{exhibit.learningGoal}</p>
        </div>
        
        <div className="meta-tags">
          <span className="meta-tag">関連種: {exhibit.featuredSpecies}</span>
          <span className="meta-tag audience">対象: {exhibit.recommendedAudience}</span>
        </div>
      </div>
    </div>
  );
};

export default ExhibitCard;
