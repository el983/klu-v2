import React from 'react'
import './OverlappingContainers.css'
import img_10 from '../assests/overlap_image.jpg'
const OverlappingContainers = () => {
  return (
    <div className='container-o'>
        <div className="bottom-div">
            <img src={img_10} alt="" />
        </div>
        <div className="top-div">Top div</div>
    </div>
  )
}

export default OverlappingContainers

