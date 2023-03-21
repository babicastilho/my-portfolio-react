import React, { useEffect } from 'react';
import { useParams, } from 'react-router-dom';

import { data } from '../../../data/projects';

import Breadcrumbs from '../../../Utils/Breadcrumbs/Breadcrumbs';

import { Container, } from 'react-bootstrap';

const SingleProject = () => {
    const { slug } = useParams();
    const project = data.find((project) => project.slug.toLowerCase() === slug?.toLowerCase());

    return (
        <section className="projects content my-5" id="projects">
            <Container>
                <h1>{project?.title}</h1>
                <Breadcrumbs />

                <div className="row gy-5 py-5">
                    <div className="col-md-7">
                        <img
                            loading="lazy"
                            className="img-fluid"
                            alt="projectItemImg"
                            src={process.env.PUBLIC_URL + "/assets/portfolio_assets/" + project?.imageUrl}
                        ></img>
                    </div>
                    <div className="col-md-5">
                        <h2>Description</h2>
                        <p>{project?.description}</p>
                        <div className="single-tags mb-3">
                            <strong>developed with: </strong>
                            {project?.stack.map((e) => {
                                return (
                                    <span key={e} className="mx-1">
                                        {e}
                                    </span>
                                );
                            })}
                        </div>

                        {project?.link !== "" ? (
                            <>
                                demo: <a target="_blank" rel="noreferrer" href={project?.link}>{project?.link}</a>
                            </>
                        ) : null}
                        <br />
                        {project?.github !== "" ? (
                            <>
                                github: <a target="_blank" rel="noreferrer" href={project?.github}>{project?.github}</a>
                            </>
                        ) : null}
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default SingleProject