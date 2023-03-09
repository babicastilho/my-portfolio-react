import React, { Component, } from 'react';
import { Container } from 'react-bootstrap';

import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Resume/Resume';
import { Portfolio } from '../Portfolio/Portfolio';
import { PortfolioMobile } from '../Portfolio/PortfolioMobile';
import Contact from './Contact/Contact';

import './homepage.scss';

let isMobile: boolean;

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <div className="homepage">
                    <About />
                    <Container>
                        <Skills />
                        {window.innerWidth < 768 ? <PortfolioMobile /> : <Portfolio standalone={false} />}
                        <Contact />
                    </Container>
                </div>
            </>
        )
    }
}
