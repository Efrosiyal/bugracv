import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dil.css';

const Japanese = () => {
  const navigate = useNavigate();

  const handleClick = (section) => {
    navigate(`/japanese/${section}`);
  };

  return (
    <div className="dil-container" style={{backgroundImage: 'url(../image/background.gif)'}}>
      <div className="sections-container">
        <div className="section-box" onClick={() => handleClick('about')}>
          <h2>私について</h2>
          <div className="hover-content">
            <p>個人情報とスキルについての詳細情報</p>
          </div>
        </div>

        <div className="section-box" onClick={() => handleClick('certificates')}>
          <h2>証明書</h2>
          <div className="hover-content">
            <p>取得した資格と証明書</p>
          </div>
        </div>

        <div className="section-box" onClick={() => handleClick('cv')}>
          <h2>履歴書</h2>
          <div className="hover-content">
            <p>学歴と職歴を含む履歴書</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Japanese;