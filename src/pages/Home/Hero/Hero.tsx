import React, { Component, } from 'react';
import { Container, } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import { BsGithub, BsLinkedin, } from 'react-icons/bs';

import image from '../../../assets/img/logo.png';

import './_hero.scss';

const navigation = {
    FindMe: [
      { icons: 'BsGithub', name: 'Github', href: '#' },
      // { icons: 'RiInstagramFill', name: 'Instagram', href: '#' },
      // { icons: 'FaWhatsappSquare', name: 'WhatsApp', href: '#' },
      { icons: 'BsLinkedin', name: 'LinkedIn', href: '#' },
      //{ icons: 'RiTwitterFill', name: 'Twitter', href: '#' },
    ],
  }


const Hero = () => {
    // translate
    const { t, i18n } = useTranslation(['main']);

   

    return (
        <>
            <section className="hero mb-5" id="hero">
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
                                <span className="hello-animated">👋</span> hello, I'm
                                <h1 className="display-5 fw-bold lh-1 mb-3">Bárbara Castilho</h1>
                                <span className="job">Front-end web developer</span>
                            </div>
                            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="socialNetworks"></div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <img src={image} className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Hero;
