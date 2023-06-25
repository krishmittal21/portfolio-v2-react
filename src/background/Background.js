import React from "react";
import "../styles/background.css";
import video from "../assests/background.mp4";
import fallbackImage from "../assests/background.jpg";

const Background = () => {
    return (
        <>
        <div className="shadow-overlay"></div>
        <video
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            id="bg"
            poster={fallbackImage}
        >
            <source src={video} type="video/mp4" />
        </video>
        </>
    );
};

export default Background;