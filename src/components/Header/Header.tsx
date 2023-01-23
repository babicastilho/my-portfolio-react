import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

import ProgressBar from '../ProgressBar/ProgressBar';

import './_header.scss';

const Header = () => {
    const [headerClassName, setHeaderClassName] = useState("");

    const handleScroll = (headerClassName: string) => {
        if (headerClassName !== "onScroll" && window.pageYOffset >= 150) {
            setHeaderClassName("onScroll");
        } else if (headerClassName === "onScroll" && window.pageYOffset < 150) {
            setHeaderClassName("");
        }
    };

    React.useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]);

    return (
        <>
            <header className={headerClassName + ' fixed-top'}>
                <Navbar
                    id="navbar-menu"
                    className="shrink"
                    bg="transparent"
                    expand="md"
                >
                    <Container>
                        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                <ProgressBar
                    backgroundColor="transparent"
                    barColor="#ffc448"
                    height="2px"
                />
            </header>
        </>
    )
}
export default Header;
