import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number

    return (
        <a 
            href={`https://wa.me/${phoneNumber}`} 
            className="whatsapp-button" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
    );
};

export default WhatsAppButton;