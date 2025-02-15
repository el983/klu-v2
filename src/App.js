import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Movebox from '../src/components/MovingBoxes'
import OverCon from '../src/components/OverlappingContainers'
import CoreValues from '../src/components/CoreValues'
function App() {
  return (
    <div className='home'>
      <Navbar />
      <Movebox />
      <OverCon />
      <div className='card1'>

        <CoreValues />
      </div>
      <div className='card2'> card 2 </div>
      <div className='footer'>Footer</div>
    </div>
  );
}

export default App;
