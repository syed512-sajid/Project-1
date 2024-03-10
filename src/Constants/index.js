import css from '../assests/css.png'
import tailwind from '../assests/tailwind.png'
import html from '../assests/html.png'
import nodejs from '../assests/nodejs.png'
import reactjs from '../assests/react.png'
import javascript from '../assests/javascript.png'
import mongodb from '../assests/mongodb.png'
import web from '../assests/webdev.png'
import ux from '../assests/UiUx.jpg'
import git from '../assests/git.png'
import vs from '../assests/vs.jpg'
import stream from '../assests/stream.png'

const services = [
    {
        title: "Web Developer",
        icon : web,
    },
    {
        title: "React Developer",
        icon : reactjs,
    },
    {
        title: "UI/UX Designer",
        icon: ux,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon : html,
    },
    {
        name : "CSS 3",
        icon : css,
    },
    {
        name : "JavaScript",
        icon : javascript,
    },
    {
        name : "React JS",
        icon : reactjs,
    },
    {
        name : "Node JS",
        icon : nodejs,

    },
    {
        name : "MongoDB",
        icon: mongodb,
    },
    {
        name : "Tailwind",
        icon: tailwind,
    },
    {
        name :"git",
        icon: git,
    },
    {
        name: "Visual Studio",
        icon: vs,
    },
];


const project = [
    {
        name: "StramHub",
        description: "A captivating streaming platform that brings a diverse range of high-quality content directly to your screen, offering an immersive entertainment experience",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "ReactJS",
                color: "green-text-gradient",
            },
            {
                name: "Bootsrap",
                color: "pink-text-gradient",
            },
        ],
        image: stream, 
        source_deploy_link: "https://streamhub-ac7df.web.app",
    },
];

export { services , technologies , project};