import projectOne from "../assests/project-4.png";
import projectTwo from "../assests/project-3.png";
import projectThree from "../assests/h1.jpg";

const projects = {
    1: {
        title: "Portfolio Website",
        image: projectOne,
        description: (
        <>
            <p>
            Created an elegant website to show my work
            <br />
            yes, this website!
            Tools I Used  : 
            ReactJS,

            Tailwind,

            JavaScript,

            Vercel,

            Emailjs
            </p>
        </>
        ),
        github: "https://github.com/krishmittal21/portfolio-v2-react",
        demo: "https://krishmittal.me",
    },
    2: {
        title: "Ecommerce Website",
        image: projectTwo,
        description: (
        <>
            <p>
            E-commerce Website
        I made a website for a local bakery to sell their products

        Tools I Used : 
        Reactjs,

        Strapi,

        Stripe,

        JavaScript.
            </p>
        </>
        ),
        github: "https://github.com/krishmittal21/TheChocolateVilla-ReactJS-Stripe-Strapi",
        demo: "https://github.com/krishmittal21/TheChocolateVilla-ReactJS-Stripe-Strapi",
    },
    3: {
        title: "Python Game",
        image: projectThree,
        description: (
        <>
            <p>
            As a part of my Harvard CS50 course, I made a python game c/a The bored button Game

Tools I Used:
Python,

Tkinter
            </p>
        </>
        ),
        github: "https://github.com/krishmittal21/Random-Game-Selector",
        demo: "https://github.com/krishmittal21/Random-Game-Selector",
    },
    
};

export default projects;