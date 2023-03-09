import { useNavigate } from "react-router-dom";
import { data } from "./Portfolio";
import PortfolioItem from "./PortfolioItem";

import "./Portfolio";

export function PortfolioMobile() {

    const navigate = useNavigate();
    const handleNavigate = (route: string) => navigate("/" + route);
    let items: any = [];
    
    for (let i = 0; i < data.length; i++) {
        items.push({
            id: data[i].id,
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
        <section className="portfolio content my-5" id="portfolio">
            <h1>
                Portfolio
            </h1>

            <div className="portfolio-items-container">
                {items.slice(0, 3).map((item: any, index: number) => {
                    return (
                        <PortfolioItem
                            key={index}
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
                })}
            </div>

            <div
                className="portfolio-preview-view-more"
                onClick={() => {
                    handleNavigate("portfolio");
                }}
            >
                View More <i className="fa-solid fa-chevron-right"></i>
            </div>

        </section>
    );
}
