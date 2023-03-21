import Icons from '../assets/icons';

export type Skill = {
    name: string;
    label: string;
    color?: string;
    category?: string;
    icon?: string;
    level?: string | number | undefined;
};

const skills: Skill[] = [
    {
        name: "html",
        label: "HTML",
        color: "#e34f26",
        category: "",
        icon: Icons.Logohtml,
        level: 95
    },

    {
        name: "css",
        label: "CSS",
        color: "#0170ba",
        category: "",
        icon: Icons.Logocss,
        level: 90
    },

    {
        name: "sass",
        label: "SASS/SCSS",
        color: "#cd6799",
        category: "",
        icon: Icons.Logosass,
        level: 65
    },

    {
        name: "bootstrap",
        label: "BootStrap",
        color: "#563d7c",
        category: "",
        icon: Icons.Logobootstrap,
        level: 70
    },

    {
        name: "javascript",
        label: "JavaScript",
        color: "#ffc107",
        category: "",
        icon: Icons.Logojs,
        level: 70
    },

    {
        name: "typescript",
        label: "TypeScript",
        color: "#3178c6",
        category: "",
        icon: Icons.Logots,
        level: 50
    },

    {
        name: "jquery",
        label: "jQuery",
        color: "#0868ac",
        category: "",
        icon: Icons.Logojquery,
        level: 40
    },

    {
        name: "react",
        label: "React.js",
        color: "#00bcd4",
        category: "",
        icon: Icons.Logoreactjs,
        level: 45
    },

    {
        name: "angular",
        label: "Angular.js",
        color: "#eb3c00",
        category: "",
        level: 15
    },

    {
        name: "php",
        label: "PHP",
        color: "#0075b7",
        category: "Back end",
        icon: Icons.Logophp,
        level: 60
    },

    {
        name: "photoshop",
        label: "Photoshop",
        color: "#7fbafb",
        category: "",
        icon: Icons.Logophotoshop,
        level: 40
    },

    {
        name: "figma",
        label: "Figma",
        color: "#a259ff",
        category: "",
        icon: Icons.Logofigma,
        level: 55
    },

    {
        name: "cpp",
        label: "C / C++",
        color: "#2684ff",
        category: "",
        icon: Icons.Logocpp,
        level: 55
    },

    {
        name: "mysql",
        label: "MySQL",
        color: "#2684ff",
        category: "",
        icon: Icons.Logomysql,
        level: 55
    },

    {
        name: "git",
        label: "Git",
        color: "#f05133",
        category: "",
        icon: Icons.Logogit,
        level: 55
    },

    {
        name: "github",
        label: "Github",
        color: "#000000",
        category: "",
        icon: Icons.Logogithub,
        level: 55
    }
];

export default skills;