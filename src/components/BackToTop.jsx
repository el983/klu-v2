import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button 
            className={`back-to-top ${isVisible ? "show" : ""}`} 
            onClick={scrollToTop}
        >
            &#8679;
        </button>
    );
};

export default BackToTop;