import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Footer extends Component {
    render() {
        const d = new Date()
        let year = d.getFullYear()
        return (
            <>
                <footer className="footer flex-shrink-0 bg-dark mt-auto py-3">
                    <Container>
                        <span className="text-muted text-center">&copy; 2022 - {year} - made with ♡ and ReactJS by barbaracastilho.com -  All rigths reserved.</span>
                    </Container>
                </footer>
            </>
        )
    }
}