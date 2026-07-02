import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { siteData } from '../config/siteData';

const Terms: React.FC = () => {
  return (
    <LegalPageLayout 
      title="利用規約"
      sections={siteData.terms}
    />
  );
};

export default Terms;
