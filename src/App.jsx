import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import English from './components/English';
import Turkish from './components/Turkish';
import Japanese from './components/Japanese';
import 'bootstrap/dist/css/bootstrap.min.css';
import TurkishAbout from './components/turkish/About';
import TurkishCertificates from './components/turkish/Certificates';
import TurkishCV from './components/turkish/CV';
import JapaneseAbout from './components/japanese/About';
import JapaneseCertificates from './components/japanese/Certificates';
import JapaneseCV from './components/japanese/CV';
import EnglishAbout from './components/english/About';
import EnglishCertificates from './components/english/Certificates';
import EnglishCV from './components/english/CV';



function App() {
  return (
    <Router>
      <Routes>
  {/* ... diğer route'lar */}
  <Route path="/turkish/about" element={<TurkishAbout />} />
  <Route path="/turkish/certificates" element={<TurkishCertificates />} />
  <Route path="/turkish/cv" element={<TurkishCV />} />
  <Route path="/japanese/about" element={<JapaneseAbout />} />
        <Route path="/japanese/certificates" element={<JapaneseCertificates />} />
        <Route path="/japanese/cv" element={<JapaneseCV />} />
        <Route path="/english/about" element={<EnglishAbout />} />
        <Route path="/english/certificates" element={<EnglishCertificates />} />
        <Route path="/english/cv" element={<EnglishCV />} />
  </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/turkish" element={<Turkish />} />
        <Route path="/japanese" element={<Japanese />} />
      </Routes>
    </Router>
  );
}

export default App;