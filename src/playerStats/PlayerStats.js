import React from "react";
import "../styles/playerStats.css";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub,  AiFillMail} from "react-icons/ai";
const PlayerStats = () => {
    return (
        <div id="playerStats">
        <h1>
        <div className="flex items-center gap-2" >
        <span>Krish Mittal</span>
            <a href="https://github.com/krishmittal21" target="_blank">
                <AiFillGithub />
            </a>
            <a href="https://twitter.com/krishmittal_" target="_blank">
                <AiFillTwitterCircle/>
            </a>
            <a href="https://www.linkedin.com/in/krishmittal/" target="_blank">
                <AiFillLinkedin/>
            </a>
            <a href="mailto:krishmittal212005@gmail.com">
                <AiFillMail/>
            </a>
            </div>
            
            LEVEL 18</h1>
        <div id="playerStats__lines">
            <span id="playerStats__lines__thick"></span>
            <span id="playerStats__lines__thin"></span>
        </div>
        <h2>Developer, Cloud Architect &
            
            Product Manager
        </h2>
        </div>
    );
};

export default PlayerStats;