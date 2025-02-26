import React, { useState } from "react";
import "./MovingBoxes.css";
import car3 from '../assests/car3.png'
import car4 from '../assests/car4.png'
import car5 from '../assests/car5.png'
import poster from '../assests/poster.png'
const MovingBoxes = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      {/* First Section (Video + Moving Boxes) */}
      <div className="main-container">
        <div className="hero">
          <video src="/video/graphic_1.mp4" autoPlay loop muted></video>
          <div className="video-bottom">
            <h1>KAIROS LEARNING UNIVERSE</h1>
          </div>
        </div>
        <div className="container-m">
          <div
            className={`cont a ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={car3} alt="" />
            {/* <div className="an1">
              <p>gjshbjhdhvknfnd</p>
            </div> */}
          </div>
          <div
            className={`cont b ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={car4} alt="" />
          </div>
          <div
            className={`cont c ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={car5} alt="" />
          </div>
          <div
        className={`cont d ${isPaused ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={car4} alt="Car" />
      </div>
        </div>
      </div>

      {/* Second Section (Heading + Moving Boxes) */}
      <div className="second-container">
        <div className="text-section">
          <h1>OUR SERVICES</h1>
          
        </div>
        <div className="container-m">
        <div
            className={`pqrs x ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={poster} alt="" />
          </div>
          <div
            className={`pqrs y ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={poster} alt="" />
          </div>
          <div
            className={`pqrs z ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={poster} alt="" />
          </div>
          <div
            className={`pqrs w ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={poster} alt="" />
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
