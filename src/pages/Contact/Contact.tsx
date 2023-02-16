import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

import { Container, } from 'react-bootstrap';

export default function Contactpage() {
    // translate
    const { t, i18n } = useTranslation(['main']);
    return (
        <>
            <section className="contact content page" id="contact">
                <Container>
                    <p>{t("contact_page", { ns: ['main'] })}</p>
                </Container>
            </section>
        </>
    )

}
