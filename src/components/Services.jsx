import React, { useState, useEffect } from 'react';
import CoreValues from './CoreValues';
import OurTeam from './OurTeam';
import './Services.css';

const Services = () => {
 
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='services-container'>
      <div className='core-values'>
        <CoreValues />
      </div>
      <div className='ourteam' style={{ transform: `translateY(-${scrollY}px)` }}>
        <OurTeam />
      </div>
    </div>
  );
};

export default Services;
