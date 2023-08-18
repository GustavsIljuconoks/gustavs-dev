import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  forms,
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
    name: "git",
    icon: git,
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
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const roles = [
  "Web Developer",
  "Back-End Amateur",
  "UI Design Enthusiast"
]

export { technologies, projects, roles };