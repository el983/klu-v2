import React, { useState, useRef, useEffect } from "react";
import "./MovingBoxes.css";
import wood1 from '../assests/20x.png';
import wood2 from '../assests/21x.png';
import wood3 from '../assests/22x.png';
import poster from '../assests/poster.png';
import logo from '../assests/logo.png';
import custom from '../assests/custom1.png';
import global from '../assests/global1.png';
import advisory from '../assests/advisory1.png';
import train from '../assests/train1.png';
import a from '../assests/a.jpeg';
import b from '../assests/b.jpeg';
import c from '../assests/c.jpeg';
import d from '../assests/d.jpeg';
import e from '../assests/e.jpeg';
import f from '../assests/f.jpeg';

const MovingBoxes = () => {
  const images = [a, b, c, d, e, f];
  const [isPaused, setIsPaused] = useState(false);
  const galleryRef = useRef(null);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Drag functionality for gallery
  useEffect(() => {
    const gallery = galleryRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      gallery.classList.add('active');
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      gallery.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      gallery.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed multiplier
      gallery.scrollLeft = scrollLeft - walk;
    };

    gallery.addEventListener('mousedown', handleMouseDown);
    gallery.addEventListener('mouseleave', handleMouseLeave);
    gallery.addEventListener('mouseup', handleMouseUp);
    gallery.addEventListener('mousemove', handleMouseMove);

    return () => {
      gallery.removeEventListener('mousedown', handleMouseDown);
      gallery.removeEventListener('mouseleave', handleMouseLeave);
      gallery.removeEventListener('mouseup', handleMouseUp);
      gallery.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* First Section (Video + Moving Boxes) */}
      <div className="main-container" id="main-container1">
        <div className="hero">
          <video src="/video/graphic_1.mp4" autoPlay loop muted></video>
          <div className="video-bottom">
            <img src={logo} alt="" />
            <h4>KAIROS LEARNING UNIVERSE</h4>
            <p>A POSSE AD ESSE <br /> FROM POSSIBILITY TO ACTUALITY</p>
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

      {/* Draggable Image Gallery */}
      <div className="middle-container">
        
        <div className="container-pic">
          <div
            className={`pic p ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={a} alt="" />
          </div>
          <div
            className={`pic q ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={b} alt="" />
          </div>
          <div
            className={`pic r ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={c} alt="" />
          </div>
          <div
            className={`pic s ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={d} alt="" />
          </div>
          <div
            className={`pic e ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={e} alt="" />
          </div>
          <div
            className={`pic f ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={f} alt="" />
          </div>
        </div>
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

      {/* Footer Section */}
      <div className="third_container">
        <h1>Empowering Education, Transforming Futures, Globally.</h1>
        <p>We focus on driving impactful change in education and professional development, while fostering global collaboration and innovation.</p>
      </div>
    </>
  );
};

export default MovingBoxes;
