import React from 'react';
// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
// App CSS file
import './App.css';

// Initialize Animate on Scroll
AOS.init();

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
