export type Project = {
    id: number;
    slug: string;
    title: string;
    resume: string;
    imageUrl: string;
    description: string;
    link: string;
    github: string;
    stack: string[];
    filters: string[];
};

export const data: Project[] = [
    {
        id: 0,
        slug: "lorem-ipsum-0",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "https://barbaracastilho.com",
        github: "https://github.com/babicastilho",
        stack: ["Flutter", "Typescript", "NoSQL", "AWS Services", "GraphQL"],
        filters: ["all", "web", "mobile"],
    },
    {
        id: 1,
        slug: "lorem-ipsum-1",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Flutter", "Typescript", "API"],
        filters: ["all", "web", "mobile"],
    },
    {
        id: 2,
        slug: "lorem-ipsum-2",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Django", "Python", "SQL"],
        filters: ["all", "web"],
    },
    {
        id: 3,
        slug: "lorem-ipsum-3",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Python", "PyGame", "2D Game"],
        filters: ["all", "game"],
    },
    {
        id: 4,
        slug: "lorem-ipsum-4",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Javascript", "HTML", "CSS"],
        filters: ["all", "web"],
    },
    {
        id: 5,
        slug: "lorem-ipsum-5",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Java", "GUI"],
        filters: ["all", "other", "data", "desktop"],
    },
    {
        id: 6,
        slug: "lorem-ipsum-6",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Machine Learning", "CNN", "R-CNN", "Jupyter"],
        filters: ["all", "data", "other"],
    },
    {
        id: 7,
        slug: "lorem-ipsum-7",
        title: "Lorem ipsum dolor sit amet",
        resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imageUrl: "uoe_app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi possimus dolores eaque provident consequatur accusantium quaerat illum placeat repellat quos. Excepturi, culpa consequuntur quam qui commodi tempora quis voluptates impedit!",
        link: "",
        github: "",
        stack: ["Haskell", "GUI"],
        filters: ["all", "other"],
    },
];