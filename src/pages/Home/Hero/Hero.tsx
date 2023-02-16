import React, { Component, } from 'react';
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { BsGithub, BsLinkedin, } from 'react-icons/bs';


import image from '../../../assets/img/logo.png';

import './_hero.scss';

const Hero = () => {
    // translate
    const { t, i18n } = useTranslation(['main']);



    return (
        <>
            <section className="hero" id="hero">
                <div className="background">
                    <div className="top">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                        <div className="six"></div>
                        <div className="seven"></div>
                        <div className="eight"></div>
                        <div className="nine"></div>
                    </div>

                    <div className="four"></div>
                    <div className="five"></div>
                    <div className="ten"></div>
                </div>
                <div className="container col-xxl-10 px-4 pb-5">
                    <div className="row flex-lg-row align-items-center g-5 mx-auto">
                        <div className="col-lg-7">
                            <div className="welcomeHero">
                                <div className="top">
                                    <span className="hello-animated">👋</span>
                                    <span className="hello">hello, I'm</span>
                                </div>
                                <h1>Bárbara Castilho</h1>
                                <span className="job">Front-end web developer</span>
                            </div>
                            <p>
                                Based in Fundão, Portugal. I'm passionate about User Experience, Responsive Devlopment, Accessibility and dedicated to my work.
                            </p>
                            <div className="socialNetworks d-flex align-items-center">
                                <ul className="d-flex">
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href='https://www.kindacode.com'>
                                            <BsLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href='https://www.kindacode.com'>
                                            <BsGithub />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <img src={image} className="d-block mx-auto img-fluid" alt="purple illustration" width="700" height="500" loading="lazy" />
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Hero;
