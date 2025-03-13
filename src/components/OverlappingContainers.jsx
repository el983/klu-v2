import React from 'react'
import './OverlappingContainers.css'
import img_10 from '../assests/overlap_image.jpg'
const OverlappingContainers = () => {
  return (
    <div className='container-o' id='about'>
      {/* <div className="heading-section">
        <h2>About Kairos Learning Universe</h2>
        <p>Empowering institutions and individuals through innovative learning solutions.</p>
      </div> */}
      {/* <div className="top-bottom"> */}
      <div className="bottom-div">
            <img src={img_10} alt="" />
        </div>
        <div className="top-div">
          <div className="mis-vis">
          <div className="mission">
            <h3>MISSION</h3>
            <p>"To revolutionize education and professional training by providing strategic advisory services, fostering global academic collaborations, and delivering transformative learning experiences that empower institutions and individuals to achieve excellence."</p>
          </div>
          <div className="mission">
            <h3>VISION</h3>
            <p>"To become a globally recognized leader in educational innovation, shaping the future of learning through strategic partnerships, cutting-edge training programs, and sustainable institutional growth."
            </p>
          </div>
          </div>
        </div>
      </div>
      
    // </div>
  )
}

export default OverlappingContainers