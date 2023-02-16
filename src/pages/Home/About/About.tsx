import React, { Component } from 'react'
import { useTranslation } from "react-i18next";

import { Container, Button, } from 'react-bootstrap';

import './_about.scss';
import myPhoto from '../../../assets/img/my-pic.jpg';

export default function About() {
    // translate
    const { t, i18n } = useTranslation(['main']);

    return (
        <>
            <section className="about content" id="about">
                <Container>
                    <div className="row gy-5 pb-5">
                        <div className="col-md-6 text-center">
                            
                            <img src={ myPhoto } className="d-block mx-auto img-fluid rounded photo" alt="my photo" loading="lazy" />
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1>{t("about.title", { ns: ['main'] })}</h1>
                            <p>{t("about.description", { ns: ['main'] })}</p>
                            <div className="text-center my-5">
                                <Button variant="primary">Download CV - soon</Button>{' '}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )

}