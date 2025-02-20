import React from 'react'
import './Services.css'
import Footer from './Footer'
import Prf from '../assests/profile.jpg'
const Services = () => {
  return (
    <div className='services'>
      <div className="our-team-heading">
        <h1>OUR TEAM</h1>
      </div>
      <div className="pictures">
        <div className="pic-1">
          <div className="box1">
            <img src={Prf} alt="" />
            
          </div>
        </div>

        <div className="pic-1">
          <div className="box2">
            <img src={Prf} alt="" />
            
          </div>
        </div>

        <div className="pic-1">
          <div className="box3">
            <img src={Prf} alt="" />
            
          </div>
        </div>

        <div className="pic-1">
          <div className="box4">
            <img src={Prf} alt="" />
            
          </div>
        </div>

        <div className="pic-1">
          <div className="box5">
            <img src={Prf} alt="" />
            
          </div>
        </div>

        <div className="pic-1">
          <div className="box6">
            <img src={Prf} alt="" />
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
    
  )
}

export default Services