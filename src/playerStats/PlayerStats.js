import React from "react";
import "../styles/playerStats.css";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub,  AiFillMail, AiFillBook} from "react-icons/ai";
const PlayerStats = () => {
    return (
        <div id="playerStats">
        <h1>
        <div className="flex items-center gap-2" >
        <span>Krish Mittal</span>
            
            </div>
            
            LEVEL 18</h1>
        <div id="playerStats__lines">
            <span id="playerStats__lines__thick"></span>
            <span id="playerStats__lines__thin"></span>
        </div>
        <h2>Developer, Cloud Architect &
            
            Product Manager
        </h2>
        <div className="flex  justify-start gap-1">
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
            <a href="https://docs.google.com/document/d/1t_RGrKz5V0mWJ0wzWueFE368S37o03K3Ni23_nwB0JQ/edit" target="_blank">
                <AiFillBook/>
            </a>
        </div>
        </div>
    );
};

export default PlayerStats;