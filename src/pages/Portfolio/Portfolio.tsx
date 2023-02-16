import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

import { Container, } from 'react-bootstrap';

export default function Portfoliopage() {
    // translate
    const { t, i18n } = useTranslation(['main']);
    return (
        <>
            <section className="portfolio content page" id="portfolio">
                <Container>
                    <p>{t("portfolio_page", { ns: ['main'] })}</p>
                </Container>
            </section>
        </>
    )

}
