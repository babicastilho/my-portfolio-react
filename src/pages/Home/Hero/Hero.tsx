import React, { Component, } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import image from '../../../assets/img/logo.png';

import './_hero.scss';

const Hero = () => {
    // translate
    const { t, i18n } = useTranslation(['main']);

    return (
        <>
            <section className="hero mb-5" id="hero">

                
                <div className="container col-xxl-10 px-4 py-5">
                    <div className="row flex-lg align-items-center g-5 mx-auto">
                    <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <img src={image} className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        
                    </div>
                </div>

            </section>
        </>
    )
}
export default Hero;
