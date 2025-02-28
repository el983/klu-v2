import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Movebox from '../src/components/MovingBoxes'
import OverCon from '../src/components/OverlappingContainers'
import CoreValues from '../src/components/CoreValues'
import Services from '../src/components/Services'
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div className='home'>
      <Navbar />
      <Movebox />
      <OverCon />
      <div className='card1'>

        <CoreValues />
      </div>
      <div className='card2'> 
        <Services/>
        
      </div>
      <WhatsAppButton/>
      <BackToTop/>
      
    </div>
  );
}

export default App;
