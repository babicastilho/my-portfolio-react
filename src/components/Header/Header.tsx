import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <>
                <header>
                    <Navbar id="navbar-menu" bg="dark" variant="dark" expand="md" fixed="top">
                        <Container>
                            <Navbar.Brand as={ Link } to="/">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={ Link } to="/">Home</Nav.Link>
                                    <Nav.Link as={ Link } to="/about">About</Nav.Link>
                                    <Nav.Link as={ Link } to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        )
    }
}
