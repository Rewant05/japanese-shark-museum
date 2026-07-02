import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="contact-success">
        <h3>送信が完了しました</h3>
        <p>お問い合わせいただきありがとうございます。内容を確認の上、担当者よりご連絡させていただきます。</p>
        <button className="btn-secondary" onClick={() => setStatus('idle')}>
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">お名前 <span className="required">*</span></label>
        <input type="text" id="name" name="name" required placeholder="例：海洋 太郎" />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">メールアドレス <span className="required">*</span></label>
        <input type="email" id="email" name="email" required placeholder="example@sameumi.jp" />
      </div>
      
      <div className="form-group">
        <label htmlFor="type">お問い合わせ種別 <span className="required">*</span></label>
        <select id="type" name="type" required>
          <option value="">選択してください</option>
          <option value="exhibit">展示について</option>
          <option value="species">サメ図鑑について</option>
          <option value="visit">来館について</option>
          <option value="group">学校・団体見学について</option>
          <option value="press">取材・掲載について</option>
          <option value="other">その他</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="message">メッセージ <span className="required">*</span></label>
        <textarea id="message" name="message" rows={6} required placeholder="お問い合わせ内容をご記入ください"></textarea>
      </div>
      
      <div className="form-privacy-note">
        <p>ご入力いただいた個人情報は、お問い合わせ対応のためにのみ利用いたします。</p>
      </div>
      
      <button type="submit" className="btn-primary form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? '送信中...' : '送信する'}
      </button>
    </form>
  );
};

export default ContactForm;
