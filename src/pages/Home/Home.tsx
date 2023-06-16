import React, { Component, } from 'react';
import { Container } from 'react-bootstrap';

import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Resume/Resume';
import { Projects } from '../Projects/Projects';
import { ProjectsMobile } from '../Projects/Mobile';
import { Contact } from '../Contact/Contact';

import './homepage.scss';

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <div className="homepage">
                    <About />
                    <Container>
                        <Skills />
                        {window.innerWidth < 768 ? <ProjectsMobile /> : <Projects standalone={false} />}
                        <Contact standalone={false}/>
                    </Container>
                </div>
            </>
        )
    }
}
