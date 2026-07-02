import React from 'react';

import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-header about-header">
        <div className="container">
          <h1 className="page-title">私たちについて</h1>
          <p className="page-subtitle">海の捕食者の真の姿を伝える、架空のミュージアム</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container about-content">
          <div className="about-grid">
            <div className="about-text-col">
              <h2>ミッション</h2>
              <p>
                「鮫海博物館」は、サメに関する正しい知識の普及と、海洋環境の保全意識を高めることを目的として設立された架空の海洋教育ミュージアムです。<br/><br/>
                映画やメディアの影響により、サメは「恐ろしい人食いモンスター」として描かれることが多く、その結果として彼らが直面している絶滅の危機が見過ごされがちです。私たちは、最先端の展示手法を通じて、4億年という途方もない時間を生き抜いてきた彼らの進化の不思議と、生態系の頂点捕食者としての重要な役割を伝えます。
              </p>
            </div>
            
            <div className="about-text-col">
              <h2>なぜサメを学ぶのか？</h2>
              <p>
                健全な海には、健全な頂点捕食者が必要です。サメが減少すると、彼らの獲物であった中型魚類が異常繁殖し、結果としてサンゴ礁などの生態系全体が崩壊する可能性があります。<br/><br/>
                私たちがサメを正しく理解し、恐怖ではなく敬意を持って接することは、未来の豊かな海を守ることに直結しています。当館では、子どもから大人まで、あらゆる世代が海洋リテラシーを高められるよう、インタラクティブで科学的な学びの場を提供しています。
              </p>
            </div>
          </div>
          
          <div className="about-disclaimer">
            <h3>※免責事項（フィクションについて）</h3>
            <p>
              本ウェブサイトは、ウェブ制作のデモンストレーションおよびポートフォリオ用に作成された架空のサメ博物館のコンセプトサイトです。<br/>
              「鮫海博物館（Sameumi Hakubutsukan）」という施設は実在しません。掲載されている展示内容、開館時間、お問い合わせ窓口などはすべてフィクションであり、実在の博物館、政府機関、海洋研究機関とは一切関係ありません。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
