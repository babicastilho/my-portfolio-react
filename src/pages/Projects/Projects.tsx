import React, { useEffect, useState } from 'react';
import { Container, } from 'react-bootstrap';

import Breadcrumbs from '../../Utils/Breadcrumbs/Breadcrumbs';

import { useTranslation } from "react-i18next";

import { data } from '../../data/projects';
import { FilterItem } from "./FilterItem";
import ProjectsItem from "./Item";

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import "./_projects.scss";



interface ProjectsProps {
    standalone: boolean;
}

export function Projects({ standalone }: ProjectsProps) {

    return (
        <section className="projects content my-5" id="projects">
            {standalone ? <Container><ProjectsContent standalone={true} /></Container>
                : <ProjectsContent standalone={false} />}
        </section>

    );
}


export function ProjectsContent({ standalone }: ProjectsProps) {
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
            <SectionTitle>{t("projects.title", { ns: ['main'] })}</SectionTitle>
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
            <div className="projects-items-container">

                {data.map((item) => {
                    if (item.filters.includes(currentFilter)) {
                        return (
                            <ProjectsItem
                                key={item.id}
                                id={item.id}
                                slug={item.slug}
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

