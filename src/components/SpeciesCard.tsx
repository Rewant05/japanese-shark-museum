import React from 'react';
import './SpeciesCard.css';

interface SpeciesProps {
  species: {
    id: string;
    japaneseName: string;
    commonType: string;
    sizeRange: string;
    habitat: string;
    diet: string;
    behaviorNote: string;
    dangerLevelNote: string;
    conservationNote: string;
    description: string;
    imageUrl?: string;
  }
}

const SpeciesCard: React.FC<SpeciesProps> = ({ species }) => {
  return (
    <div className="species-card" id={species.id}>
      <div className="species-header">
        <h3 className="species-name">{species.japaneseName}</h3>
        <span className="species-type">{species.commonType}</span>
      </div>
      
      {species.imageUrl && (
        <div className="species-image-container">
          <img src={species.imageUrl} alt={species.japaneseName} className="species-image" loading="lazy" />
        </div>
      )}
      
      <p className="species-desc">{species.description}</p>
      
      <div className="species-details">
        <div className="detail-item">
          <span className="detail-label">生息地</span>
          <span className="detail-value">{species.habitat}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">サイズ</span>
          <span className="detail-value">{species.sizeRange}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">食性</span>
          <span className="detail-value">{species.diet}</span>
        </div>
      </div>
      
      <div className="species-notes">
        <div className="note-item danger">
          <strong>危険度:</strong> {species.dangerLevelNote}
        </div>
        <div className="note-item conservation">
          <strong>保全状況:</strong> {species.conservationNote}
        </div>
      </div>
    </div>
  );
};

export default SpeciesCard;
