import React from 'react';
import { siteData } from '../config/siteData';
import './Conservation.css';

const Conservation: React.FC = () => {
  const content = siteData.conservationContent;
  
  return (
    <div className="conservation-page">
      <div className="page-header conservation-header">
        <div className="container">
          <h1 className="page-title">保全と研究</h1>
          <p className="page-subtitle">海を守ることは、私たち自身の未来を守ること</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container conservation-container">
          <div className="conservation-block">
            <h2 className="block-title">生態系における役割</h2>
            <p>{content.role}</p>
          </div>
          
          <div className="conservation-block danger-block">
            <h2 className="block-title">乱獲と保全</h2>
            <p>{content.overfishing}</p>
          </div>
          
          <div className="conservation-block">
            <h2 className="block-title">誤解による恐怖の問題</h2>
            <p>{content.fear}</p>
          </div>
          
          <div className="conservation-block">
            <h2 className="block-title">海洋環境と生息地</h2>
            <p>{content.environment}</p>
          </div>
          
          <div className="conservation-block highlight-block">
            <h2 className="block-title">教育の重要性</h2>
            <p>{content.education}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conservation;
