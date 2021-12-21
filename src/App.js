import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import PasswordGen from './Components/PasswordGen';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Projects />
            <Contact />
          </>
          } />
        <Route path="pass-gen" element={<PasswordGen />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
