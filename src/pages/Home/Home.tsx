import React, { Component, } from 'react';
import { Container } from 'react-bootstrap';

import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';

import './homepage.scss';

export default class Home extends Component { 
    render() {
        return (
            <>
                    <Hero />
                    <Container>
                        <About />
                        <Contact />
                    </Container>
            </>
        )
    }
}
