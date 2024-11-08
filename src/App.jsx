import './App.css';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import { useRef } from 'react';
// import React from 'react';

function App() {

  const homeRef = useRef(null);

  const openWhatsApp = () => {
    const phoneNumber = '+681268494403'; // Replace with your phone number in international format, e.g., 1234567890
    const message = 'Hello, Agung!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, '_blank');
  }

  
  return (
    <div>
      <Header />  
      <Home 
      homeRef={homeRef} 
      openWhatsApp={openWhatsApp}
      />
      <Skills />
      <Experience />
      <Education />
      <Footer
      homeRef={homeRef}
      />
    </div>
  )
}

export default App;
