import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        {/* <StarsCanvas /> removed 3rd ball effect */}
      </div>
    </BrowserRouter>
  );
};

export default App;
