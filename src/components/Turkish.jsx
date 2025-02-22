import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dil.css';

const Turkish = () => {
  const navigate = useNavigate();

  const handleClick = (section) => {
    navigate(`/turkish/${section}`);
  };

  return (
    <div className="dil-container" style={{backgroundImage: 'url(../image/background.gif)'}}>
      <div className="sections-container">
        <div className="section-box" onClick={() => handleClick('about')}>
          <h2>Hakkımda</h2>
          <div className="hover-content">
            <p>Kişisel bilgilerim ve yeteneklerim hakkında detaylı bilgi</p>
          </div>
        </div>

        <div className="section-box" onClick={() => handleClick('certificates')}>
          <h2>Sertifikalarım</h2>
          <div className="hover-content">
            <p>Sahip olduğum sertifikalar ve başarılarım</p>
          </div>
        </div>

        <div className="section-box" onClick={() => handleClick('cv')}>
          <h2>Özgeçmiş</h2>
          <div className="hover-content">
            <p>Eğitim ve iş deneyimlerimi içeren özgeçmişim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turkish;