import React, { useState } from 'react';
import './CoreValues.css';
import img_20 from '../assests/core2.png';

const CoreValues = () => {
    const [isPaused, setIsPaused] = useState(false);
    
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const boxContents = [
        { heading: "Strong Leadership", text: "Visionary founders and a dedicated team." },
        { heading: "Client-Centric Approach", text: "Tailored solutions that address specific client needs." },
        { heading: "Innovation", text: "Staying ahead of trends in education and technology." },
        { heading: "Collaboration", text: "Building strong networks with institutions, governments, and industry leaders" },
        { heading: "Measurable Impact", text: "Demonstrating tangible results for clients and learners" }
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
                    {boxContents.map((content, index) => (
                        <div
                            key={index}
                            className={`contain ${['a1', 'b1', 'c1', 'd1', 'e1'][index]} ${isPaused ? "paused" : ""}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h3>{content.heading}</h3>
                            <p>{content.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;