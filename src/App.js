import React from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

AOS.init();

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
    </div>
  );
}

export default App;
