import React, { Component } from 'react'
import { useTranslation } from "react-i18next";

export default function Aboutpage () {
    // translate
    const { t, i18n } = useTranslation(['main']);
        return (
            <>
                <section className="about content" id="about">
                    <p>{t("about_message", { ns: ['main'] })}</p>
                </section>
            </>
        )
    
}
