import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (language) => {
    navigate(`/${language}`);
  };

  const pageStyle = {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0
  };

  return (
    <div style={pageStyle}>
      <div className="home-container" style={{backgroundImage: 'url(image/background.gif)'}}>
        <div className="circle">
          <div className="language-section english" onClick={() => handleClick('english')}>
            <h2>English</h2>
          </div>
          <div className="language-section turkish" onClick={() => handleClick('turkish')}>
            <h2>Türkçe</h2>
          </div>
          <div className="language-section japanese" onClick={() => handleClick('japanese')}>
            <h2>日本語</h2>
          </div>
        </div>
      </div>    
      <div className="translation-note">
        <p>Not: Hiç bir çeviri Makine çevirisi değildir. Kendi dil seviyem ile yapılmıştır. Dil seviyeme bu şekilde karar verebilirsiniz.</p>
        <p>Note: None of the translations are machine translations. They are made with my own language level. This is how you can decide my language level.</p>
        <p>注：どの翻訳も機械翻訳ではありません。私自身の言語レベルで行いました。私の言語レベルはこのようにして決めることができます。</p>
      </div>
    </div>

  );
};

export default Home;
