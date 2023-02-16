import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

import { Container, } from 'react-bootstrap';

export default function Aboutpage() {
    // translate
    const { t, i18n } = useTranslation(['main']);
    return (
        <>
            <section className="about content page" id="about">
                <Container>
                    <p>{t("about_page", { ns: ['main'] })}</p>
                </Container>
            </section>
        </>
    )

}
