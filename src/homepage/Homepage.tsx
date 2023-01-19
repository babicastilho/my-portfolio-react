import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';

import './index.scss';

export default class Homepage extends Component {
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
