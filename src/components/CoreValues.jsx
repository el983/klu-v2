import React, { useState, useEffect } from 'react';
import './CoreValues.css';
import img_20 from '../assests/core2.png';

const CoreValues = () => {
    const [isPaused, setIsPaused] = useState(false);
    
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const boxTexts = [
        "Strong Leadership",
        "Client-Centric Approach ",
        "Innovation",
        "Collaboration",
        "Measurable Impact"
    ];

    return (
        <div className='container-cv'>
            <div className="img-girl">
                <img src={img_20} alt="" />
            </div>
            <div className="core-suc">
                <div className="core">
                    <h1>CORE VALUES</h1>
                    <div className='core_values_para'>
                    <p><b>Excellence:</b> Commitment to delivering high-quality advisory services and training programs.</p>
                    <p><b>Collaboration:</b> Building strong partnerships with educational institutions and industry leaders.</p>
                    <p><b>Innovation:</b> Embracing creativity and technology to redefine learning experiences.</p>
                    <p><b>Integrity:</b> Upholding ethical practices and transparency in all operations.</p>
                    <p><b>Empowerment:</b> Enabling individuals and institutions to unlock their full potential.</p>
                    <p><b>Global Mindset:</b> Fostering cross-cultural understanding and global academic exchange.</p>
                    </div>
                    
                </div>
                <div className="container-man">
                    <h1>KEY SUCCESS FACTOR</h1>
                    {['a1', 'b1', 'c1', 'd1', 'e1'].map((cls, index) => (
                        <div
                            key={index}
                            className={`contain ${cls} ${isPaused ? "paused" : ""}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {boxTexts[index]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
