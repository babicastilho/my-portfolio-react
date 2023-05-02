import Icons from '../assets/icons';

export type Skill = {
    name: string;
    label: string;
    color?: string;
    category?: string;
    icon?: string;
    level?: string | number | undefined;
    description: string;
};

const skills: Skill[] = [
    {
        name: "html",
        label: "HTML5",
        color: "#e34f26",
        category: "Frontend",
        icon: Icons.Logohtml,
        level: 95,
        description: "Semantics, a11y, knowledge of WCAG 2.0 and ARIA"
    }, 

    {
        name: "css",
        label: "CSS 3",
        color: "#0170ba",
        category: "Frontend",
        icon: Icons.Logocss,
        level: 90,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "sass",
        label: "SASS/SCSS",
        color: "#cd6799",
        category: "Others",
        icon: Icons.Logosass,
        level: 65,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "bootstrap",
        label: "BootStrap",
        color: "#563d7c",
        category: "Frontend",
        icon: Icons.Logobootstrap,
        level: 70,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "javascript",
        label: "JavaScript",
        color: "#ffc107",
        category: "Frontend",
        icon: Icons.Logojs,
        level: 70,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "typescript",
        label: "TypeScript",
        color: "#3178c6",
        category: "Others",
        icon: Icons.Logots,
        level: 50,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "jquery",
        label: "jQuery",
        color: "#0868ac",
        category: "Frontend",
        icon: Icons.Logojquery,
        level: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "react",
        label: "React.js",
        color: "#00bcd4",
        category: "Frontend",
        icon: Icons.Logoreactjs,
        level: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "angular",
        label: "Angular.js",
        color: "#eb3c00",
        category: "Frontend",
        icon: Icons.Logoangular,
        level: 15,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "php",
        label: "PHP",
        color: "#0075b7",
        category: "Backend",
        icon: Icons.Logophp,
        level: 60,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "photoshop",
        label: "Photoshop",
        color: "#7fbafb",
        category: "Tools",
        icon: Icons.Logophotoshop,
        level: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "figma",
        label: "Figma",
        color: "#a259ff",
        category: "Tools",
        icon: Icons.Logofigma,
        level: 55,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "cpp",
        label: "C / C++",
        color: "#2684ff",
        category: "Others",
        icon: Icons.Logocpp,
        level: 55,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "mysql",
        label: "MySQL",
        color: "#2684ff",
        category: "Backend",
        icon: Icons.Logomysql,
        level: 55,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "git",
        label: "Git",
        color: "#f05133",
        category: "Tools",
        icon: Icons.Logogit,
        level: 55,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    },

    {
        name: "github",
        label: "Github",
        color: "#000000",
        category: "Tools",
        icon: Icons.Logogithub,
        level: 55,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam tenetur quia hic sapiente, in molestias ea animi alias? Eius nisi voluptatum, eveniet eum totam excepturi praesentium earum dolores! Dolore."
    }
];

export default skills;