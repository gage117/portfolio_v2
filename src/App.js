import React from 'react';
// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize Animate on Scroll
AOS.init();

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
