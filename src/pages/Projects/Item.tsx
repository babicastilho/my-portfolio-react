import { Link } from 'react-router-dom';

import { Project } from '../../data/projects';

export default function ProjectsItem({
    id,
    slug,
    title,
    resume,
    imageUrl,
    description,
    link,
    github,
    stack,
    filters,
}: Project) {

    return (

        <div
            key={id}
            className="projects-item-container">
            <div className="item-details">
                <div className="projects-item-body">
                    <div className="projects-item-body-title">

                        <Link to={`/projects/${slug}`}>
                            {title}
                        </Link>
                    </div>
                    <div className="projects-item-body-desc">{resume}
                        <div className="projects-item-body-tag-container">
                            {stack?.map((e) => {
                                return (
                                    <div key={e} className="projects-item-body-tag">
                                        {e}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="projects-links">

                        {link !== "" ? (
                            <>
                                demo: <a target="_blank" rel="noreferrer" href={link}>{link}</a>
                            </>
                        ) : null}
                        <br />
                        {github !== "" ? (
                            <>
                                github: <a target="_blank" rel="noreferrer" href={github}>{github}</a>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>

            <img
                loading="lazy"
                className="projects-item-img"
                alt="projectItemImg"
                src={process.env.PUBLIC_URL + "/assets/portfolio_assets/" + imageUrl}
            ></img>

        </div>
    );
}
