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

  return (
    <div>
      <Header />  
      <Home 
      homeRef={homeRef} 
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
