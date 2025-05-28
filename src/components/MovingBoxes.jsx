import React, { useState } from "react";
import "./MovingBoxes.css";
// import car3 from '../assests/car3.png'
// import car4 from '../assests/car4.png'
// import car5 from '../assests/car5.png'
import wood1 from '../assests/20x.png'
import wood2 from '../assests/21x.png'
import wood3 from '../assests/22x.png'
import poster from '../assests/poster.png'
import logo from '../assests/logo.png'
import custom from '../assests/custom1.png'
import global from '../assests/global1.png'
import advisory from '../assests/advisory1.png'
import train from '../assests/train1.png'
import a from '../assests/a.jpeg'
import b from '../assests/b.jpeg'
import c from '../assests/c.jpeg'
import d from '../assests/d.jpeg'
import e from '../assests/e.jpeg'
import f from '../assests/f.jpeg'

const MovingBoxes = () => {
  const images = [
    a,b,c,d,e,f
  ];

  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      {/* First Section (Video + Moving Boxes) */}
      <div className="main-container" id="main-container1">
        <div className="hero">
          <video src="/video/graphic_1.mp4" autoPlay loop muted></video>
          <div className="video-bottom">
            {/* <h1>KAIROS LEARNING UNIVERSE</h1> */}
            <img src={logo} alt="" />
            <h4>KAIROS LEARNING UNIVERSE</h4>
            <p> A POSSE AD ESSE <br /> FROM POSSIBILITY TO ACTUALITY</p> 
          </div>
        </div>
        <div className="container-m">
          <div
            className={`cont a ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={wood1} alt="" />
            
          </div>
          <div
            className={`cont b ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={wood2} alt="" />
          </div>
          <div
            className={`cont c ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={wood3} alt="" />
          </div>
         
        </div>
      </div>


      <div className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Second Section (Heading + Moving Boxes) */}
      <div className="second-container" id="services">
        <div className="text-section">
          <h1>OUR SERVICES</h1>
          <p>Explore how KLU can assist you in achieving your goals with our wide range of services designed to empower individuals and institutions.</p>
        </div>
        <div className="container-m">
        <div
            className={`pqrs x ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={advisory} alt="" />
          </div>
          <div
            className={`pqrs y ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={train} alt="" />
          </div>
          <div
            className={`pqrs z ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={global} alt="" />
          </div>
          <div
            className={`pqrs w ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={custom} alt="" />
          </div>
        </div>
      </div>
      <div className="third_container">
        <h1>Empowering Education, Transforming Futures, Globally.</h1>
        <p>We focus on driving impactful change in education and professional development, while fostering global collaboration and innovation.</p>
      </div>
    </>
  );
};

export default MovingBoxes;