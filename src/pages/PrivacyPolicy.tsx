import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { siteData } from '../config/siteData';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPageLayout 
      title="プライバシーポリシー"
      sections={siteData.privacyPolicy}
    />
  );
};

export default PrivacyPolicy;
