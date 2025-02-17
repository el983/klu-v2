import React from 'react'
import { useState,useEffect } from 'react';
import './CoreValues.css'
import img_20 from '../assests/core2.png'
const CoreValues = () => {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
   const [isPaused, setIsPaused] = useState(false);
  
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
  
  return (
    
    
        <div className='container-cv'>
        <div className="img-girl">
            <img src={img_20} alt="" />
        </div>
        <div className="core-suc">
            <div className="core">
                <h1>Core Values</h1>
            </div>
            <div className="container-man">
          <div
            className={`contain a1 ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Box 1
          </div>
          <div
            className={`contain b1 ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Box 2
          </div>
          <div
            className={`contain c1 ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Box 3
          </div>
        </div>
            
        </div>
    </div>
    

    
        
      
    
  )
}

export default CoreValues