import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    python,
    figma,
    forms,
    kreics,
    development,
    threejs,
    maui,
    mysql,
    django,
} from "../assets";

export const navLinks = [
    {
        link: "#about",
        title: "About",
    },
    {
        link: "#project",
        title: "Projects",
    },
    {
        link: "#contact",
        title: "Contact",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Django",
        icon: django
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "MAUI",
        icon: maui,
    },
    {
        name: "Three JS",
        icon: threejs,
    },

];

const projects = [
    {
        name: "Battleships",
        description:
            `Popular Battleship board game online version. It's still in development.`,
        tags: [
            {
                name: "C#",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            }
        ],
        image: development,
        source_code_link: "https://github.com/GustavsIljuconoks/pirate-adventure",
    },
    {
        name: "Lauku Forms",
        description:
            `Web-based form creator project designed and created for "Latvijas Lauku konsultāciju un izglītības centrs".`,
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: forms,
        source_code_link: "https://github.com/27-Club/27club",
    },
    {
        name: "kreics.com",
        description:
            `Portfolio website for filmaker "kreicsfilms". It's still in development.`,
        tags: [
            {
                name: "Next.js",
                color: "black-text-gradient",
            },
            {
                name: "Strapi",
                color: "blue-text-gradient",
            },
        ],
        image: kreics,
        source_code_link: "https://github.com/GustavsIljuconoks/kreics.com",
    },
];

const roles = [
    "Web Developer",
    "Back-End Amateur",
    "UI Design Enthusiast"
]

export { technologies, projects, roles };
