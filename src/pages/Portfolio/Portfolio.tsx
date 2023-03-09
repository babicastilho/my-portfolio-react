import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, } from 'react-bootstrap';

import Breadcrumbs from '../../Utils/Breadcrumbs/Breadcrumbs';

import { useTranslation } from "react-i18next";

import PortfolioItem, { PortfolioItemProps } from "./PortfolioItem";
import { FilterItem } from "./FilterItem";

import "./_portfolio.scss";

export const data: PortfolioItemProps[] = [
    {
        id: 0,
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

interface PortfolioProps {
    standalone: boolean;
}

export function Portfolio({ standalone }: PortfolioProps) {

    return (
        <section className="portfolio content my-5" id="portfolio">
            
            {standalone ? <Container><PortfolioContent standalone={true}/></Container>
                : <PortfolioContent standalone={false}/>}
        </section>
        
    );
}

interface ContentProps {
    single: boolean;
}
export function PortfolioContent({ standalone }: PortfolioProps)  {
    // translate
    const { t, i18n } = useTranslation(['main']);

    let filters: string[] = [
        "all",
        "web",
        "mobile",
        "desktop",
        "game",
        "data",
        "other",
    ];
    const [currentFilter, setCurrentFilter] = useState("all");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div>
            <h1>Portfolio</h1>
            {standalone ? <Breadcrumbs /> : null}
            {/* Filters - desktop only*/}
            <div className="filters-container">
                {filters.map((filter, index) => (
                    <FilterItem
                        key={index}
                        title={filter}
                        initialClicked={filter === "all" ? true : false}
                        setCurrentFilter={setCurrentFilter}
                        currentFilter={currentFilter}
                    />
                ))}
            </div>

            {/* Filtered Items */}
            <div className="portfolio-items-container">

                {data.map((item) => {
                    if (item.filters.includes(currentFilter)) {
                        return (
                            <PortfolioItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                resume={item.resume}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                link={item.link}
                                github={item.github}
                                stack={item.stack}
                                filters={item.filters}
                            />
                        );
                    } else {
                        return null;
                    }
                })
                }
            </div>
        </div>
    );
}
