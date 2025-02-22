import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dil.css';

const English = () => {
  const navigate = useNavigate();

  const handleClick = (section) => {
    navigate(`/english/${section}`);
  };

  return (
    <div className="dil-container" style={{backgroundImage: 'url(../image/background.gif)'}}>
      <div className="sections-container">
        <div className="section-box" onClick={() => handleClick('about')}>
          <h2>About Me</h2>
          <div className="hover-content">
            <p>Detailed information about my personal information and skills</p>
          </div>
        </div>

        <div className="section-box" onClick={() => handleClick('certificates')}>
          <h2>Certificates</h2>
          <div className="hover-content">
            <p>My certificates and achievements</p>
          </div>
        </div>

        <div className="section-box" onClick={() => handleClick('cv')}>
          <h2>CV</h2>
          <div className="hover-content">
            <p>My curriculum vitae including education and work experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default English;