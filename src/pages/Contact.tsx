import React from 'react';
import ContactForm from '../components/ContactForm';
import { siteData } from '../config/siteData';
import { Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="page-header contact-header">
        <div className="container">
          <h1 className="page-title">お問い合わせ</h1>
          <p className="page-subtitle">展示や施設についてのご質問はこちらから</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>お問い合わせ先</h2>
              <p className="contact-intro">
                お急ぎの場合は、よくあるご質問（FAQ）をご確認ください。<br/>
                ※当館は架空の施設です。実際の予約や取材はお受けしておりません。
              </p>
              
              <ul className="info-list">
                <li>
                  <Mail size={24} />
                  <div>
                    <strong>メールアドレス</strong>
                    <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
                  </div>
                </li>
                <li>
                  <MapPin size={24} />
                  <div>
                    <strong>所在地</strong>
                    <span>{siteData.address}</span>
                  </div>
                </li>
                <li>
                  <Clock size={24} />
                  <div>
                    <strong>受付時間</strong>
                    <span>{siteData.businessHours}</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
          
          <div className="faq-section" style={{ marginTop: '6rem' }}>
            <h2 className="section-title">よくあるご質問 (FAQ)</h2>
            <div className="faq-list">
              {siteData.faq.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-q"><span>Q.</span> {item.question}</h3>
                  <p className="faq-a"><span>A.</span> {item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
