import './App.css';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Project from './components/Project.jsx';
import { useRef, useState } from 'react';
// import React from 'react';

function App() {

  const homeRef = useRef(null);

  const openWhatsApp = () => {
    const phoneNumber = '+6285183083964';
    const message = 'Hello, Agung!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, '_blank');
  }

  const downloadCV = () => {
      const cvUrl = "https://drive.google.com/file/d/1Gt8yc8_wxI8qJbO_-B68itGf9UsUDWh3/view?usp=drive_link";
      window.open(cvUrl, '_blank');
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      />  
      <Home 
      homeRef={homeRef} 
      openWhatsApp={openWhatsApp}
      downloadCV={downloadCV}
      />
      <Skills />
      <Experience />
      <Education />
      <Project />
      <Footer
      homeRef={homeRef}
      />
    </div>
  )
}

export default App;
