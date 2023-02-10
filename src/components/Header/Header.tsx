import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import DropdownLanguage from '../../Utils/DropdownLanguage/DropdownLanguage';
import ProgressBar from '../../Utils/ProgressBar/ProgressBar';
import ThemeMode from '../../Utils/ThemeMode/ThemeMode';

import './_header.scss';

const Header = () => {
    // useTranslation hook
    const { t, i18n } = useTranslation(['main']);
    
    // scroll effects
    const [headerClassName, setHeaderClassName] = useState("");

    const handleScroll = (headerClassName: string) => {
        if (headerClassName !== "onScroll" && window.pageYOffset >= 100) {
            setHeaderClassName("onScroll");
        } else if (headerClassName === "onScroll" && window.pageYOffset < 100) {
            setHeaderClassName("");
        }
    };

    React.useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]);

    return (
        <>
            <header className={headerClassName + ' fixed-top site-navbar'}>
                <Navbar
                    id="navbar-menu"
                    className="nav"
                    bg="transparent"
                    expand="md"
                    collapseOnSelect 
                >
                    <Container>
                        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">

                            <Nav className="mx-auto menu">
                                <Nav.Link className="nav-link-ltr" as={NavLink } end to="/">  {t("menu.home", { ns: ['main'] })} </Nav.Link>
                                <Nav.Link className="nav-link-ltr" as={NavLink } end to="/about"> {t("menu.about", { ns: ['main'] })} </Nav.Link>
                                <Nav.Link className="nav-link-ltr" as={NavLink } end to="/contact"> {t("menu.contact", { ns: ['main'] })} </Nav.Link>
                                
                            </Nav>
                            <Nav className="small-screen">
                                
                                <Navbar.Text>
                                    <span className="text">Mode: &nbsp;</span>
                                    <ThemeMode />
                                </Navbar.Text>
                                <Navbar.Text><span className="text">&nbsp; | &nbsp; </span></Navbar.Text>
                                <Navbar.Text className="d-flex flex-row align-items-center">
                                    <span className="text">Language: &nbsp;</span>
                                    <DropdownLanguage />
                                </Navbar.Text>
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
