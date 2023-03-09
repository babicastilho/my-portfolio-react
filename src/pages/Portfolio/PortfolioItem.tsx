import React, { useState } from 'react'

import "./PortfolioItem.scss";

export type PortfolioItemProps = {
    id: number;
    title: string;
    resume: string;
    imageUrl: string;
    description: string;
    link: string;
    github: string;
    stack: string[];
    filters: string[];
};

export default function PortfolioItem({
    id,
    title,
    resume,
    imageUrl,
    description,
    link,
    github,
    stack,
    filters,
}: PortfolioItemProps) {
    const [showImage, setShowImage] = useState(false);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const openSocial = (socialLink: string) => {
        window.open(socialLink);
    };

    return (

        <div
            key={id}
            className="portfolio-item-container">
            <div className="item-details">
                <div className="portfolio-item-header">
                    <i
                        className="portfolio-item-header-item"
                        onClick={() => {
                            setShowImage(!showImage);
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    ></i>

                    <div className="portfolio-item-header-links">
                        {github !== "" ? (
                            <i
                                className="fa-brands fa-xl fa-github"
                                onClick={() => {
                                    openSocial(github);
                                }}
                            ></i>
                        ) : null}
                        {link !== "" ? (
                            <i
                                className="fa-solid fa-xl fa-arrow-up-right-from-square"
                                onClick={() => {
                                    openSocial(link);
                                }}
                            ></i>
                        ) : null}
                    </div>
                </div>

                <div className="portfolio-item-body">
                    <div className="portfolio-item-body-title">{title}</div>
                    <div className="portfolio-item-body-desc">{resume}
                        <div className="portfolio-item-body-tag-container">
                            {stack?.map((e) => {
                                return (
                                    <div key={e} className="portfolio-item-body-tag">
                                        {e}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="portfolio-links">

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
                className="portfolio-item-img"
                alt="portfolioItemImg"
                src={process.env.PUBLIC_URL + "/assets/portfolio_assets/" + imageUrl}
            ></img>

        </div>


    );
}
