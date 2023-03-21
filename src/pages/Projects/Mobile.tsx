import { useNavigate } from "react-router-dom";
import { data } from "../../data/projects";
import ProjectsItem from "./Item";

import { BsChevronRight } from "react-icons/bs";

import "./Projects";

export function ProjectsMobile() {

    const navigate = useNavigate();
    const handleNavigate = (route: string) => navigate("/" + route);
    let items: any = [];

    for (let i = 0; i < data.length; i++) {
        items.push({
            id: data[i].id,
            slug: data[i].slug,
            title: data[i].title,
            resume: data[i].resume,
            imageUrl: data[i].imageUrl,
            description: data[i].description,
            link: data[i].link,
            github: data[i].github,
            stack: data[i].stack,
            filters: data[i].filters,
        });
    }

    return (
        <section className="projects content my-5" id="projects">
            <h1>Projects</h1>

            <div className="projects-items-container">
                {items.slice(0, 3).map((item: any, index: number) => {
                    return (
                        <ProjectsItem
                            key={index}
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
                })}
            </div>

            <div
                className="projects-view-more"
                onClick={() => {
                    handleNavigate("projects");
                }}
            >
                View More <BsChevronRight />
            </div>

        </section>
    );
}
