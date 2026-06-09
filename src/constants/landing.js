import { forms, kreics } from "../assets";

export const landingProjects = [
    {
        name: "kreics.com",
        type: "Creative portfolio",
        description:
            "A filmmaker portfolio shaped around visual browsing and simple editing.",
        stack: ["Next.js", "Strapi", "Design"],
        image: kreics,
        link: "https://kreics.com/",
    },
    {
        name: "Lauku Forms",
        type: "Workflow app",
        description:
            "A Django form builder for practical internal data collection.",
        stack: ["Django", "MySQL", "Bootstrap"],
        image: forms,
        link: "https://github.com/27-Club/27club",
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/GustavsIljuconoks",
        icon: "github",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/gustavs-i%C4%BCju%C4%8Donoks-60559b223/",
        icon: "linkedin",
    },
    {
        name: "Twitter",
        href: "https://x.com/gInTheBuilding",
        icon: "x",
    },
];
