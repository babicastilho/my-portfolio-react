import React from 'react'
import { useTranslation } from "react-i18next";

import { Container, Button, } from 'react-bootstrap';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { FiCoffee } from 'react-icons/fi';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';

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
                        <div className="col-md-4 left">
                            <img src={myPhoto} className="d-block img-fluid rounded photo" alt="my photo" loading="lazy" />
                        </div>

                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <SectionTitle>{t("about.title", { ns: ['main'] })}</SectionTitle>
                            <p>{t("about.description", { ns: ['main'] })}</p>

                            {/* Overview */}
                            <div className="overview">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <HiOutlineChartBar size={50} />
                                    </div>
                                    <div>
                                        <h4 className="fw-semibold my-0">3+</h4>
                                        <p className="mt-0 fw-light">Years of experience</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-3">
                                        <BsFileEarmarkCode size={50} />
                                    </div>
                                    <div>
                                        <h4 className="fw-semibold my-0">5000+</h4>
                                        <p className="mt-0 fw-light">Hours coded</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-3">
                                        <HiOutlineFire size={50} />
                                    </div>
                                    <div>
                                        <h4 className="fw-semibold my-0">20+</h4>
                                        <p className="mt-0 fw-light">Projects Completed</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-3">
                                        <FiCoffee size={50} />
                                    </div>
                                    <div>
                                        <h4 className="fw-semibold my-0">Ꝏ</h4>
                                        <p className="mt-0 fw-light">Cups of Coffee</p>
                                    </div>
                                </div>
                                


                            </div>
                            <div className="text-center mt-5">
                                <Button variant="primary">Download CV - soon</Button>{' '}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )

}