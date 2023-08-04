import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingData";
import personalIcon from "../assests/moebius-triangle.png";
import educationIcon from "../assests/upgrade.png";
import careerIcon from "../assests/triple-corn.png";

export default class AboutMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        activeMenuItem: 1,
        activeSubheading: 1,
        };
}

handleMenuItemClick = (menuItem) => {
    this.setState({
        activeMenuItem: menuItem,
        activeSubheading: 1,
    });
};
handleSubheadingClick = (subheading) => {
    this.setState({
        activeSubheading: subheading,
    });
    };

render() {
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION & CERTIFICATIONS", "CAREER", "ACHIEVEMENTS"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon =
        activeMenuTitle === "PERSONAL"
            ? personalIcon
            : activeMenuTitle === "EDUCATION & CERTIFICATIONS"
            ? educationIcon
            : activeMenuTitle === "CAREER"
            ? careerIcon
            : careerIcon;

    const subheadings = subheadingsData[activeMenuItem];

    return (
        <>
            <div className="menu">
            {menuItems.map((item, index) => (
                <AboutMenuItem
                key={index}
                title={item}
                active={activeMenuItem === index + 1}
                onClick={() => this.handleMenuItemClick(index + 1)}
                />
            ))}
            </div>
            <div className="sub-container">
            <div className="icon-title-container">
                <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
                <h3>{activeMenuTitle}</h3>
            </div>
            {subheadings.map((subheading, index) => (
                <AboutSubheading
                key={index}
                title={subheading.title}
                content={subheading.content}
                active={activeSubheading === index + 1}
                onClick={() => this.handleSubheadingClick(index + 1)}
                menuItem={activeMenuItem}
                />
            ))}
            </div>
        </>
    );
    }
}