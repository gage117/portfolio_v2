import React from 'react';
import Header from './Components/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <p data-aos="fade-in">Hi! My name is Gage and I'm a Full Stack Software Engineer!</p>
    </div>
  );
}

export default App;
