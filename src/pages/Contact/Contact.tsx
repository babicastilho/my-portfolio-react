import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

import { Container, } from 'react-bootstrap';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Breadcrumbs from '../../Utils/Breadcrumbs/Breadcrumbs';

import map from '../../assets/img/map.svg';

interface ContactProps {
    standalone: boolean;
}

export function Contact({ standalone }: ContactProps) {

    return (
        <>
            <section className="contact content my-5" id="contact">
                {standalone ? <Container><ContactContent standalone={true} /></Container>
                    : <ContactContent standalone={false} />}
            </section>
        </>
    )
}

export function ContactContent({ standalone }: ContactProps) {
    // translate
    const { t, i18n } = useTranslation(['main']);
    return (
        <div>
            <SectionTitle>{t("contact.title", { ns: ['main'] })}</SectionTitle>
            {standalone ? <Breadcrumbs /> : null}
            <div className="col-md-4">

                <img src={map} className="d-block mx-auto img-fluid" alt="purple illustration" loading="lazy" />
            </div>
            <div className="col-md-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia suscipit at amet aut corporis quaerat consequatur fugiat natus velit consequuntur, quidem magnam culpa tempore, esse dicta nobis laborum! Pariatur, exercitationem?
            </div>
        </div>
    );
}
