import React, { Component, } from 'react'
import { useTranslation } from "react-i18next";

const Hero = () => {
    // translate
    const { t, i18n } = useTranslation(['main']);

    return (
        <>
            <section className="hero content" id="hero">
                <p>{t("hero_message", { ns: ['main'] })}</p>
            </section>
        </>
    )
}
export default Hero;
