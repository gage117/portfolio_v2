import React from 'react';
// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

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
