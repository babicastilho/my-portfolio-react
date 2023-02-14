import React, { Component } from 'react'
import { useTranslation } from "react-i18next";

export default function Portfolio (){
    // translate
    const { t, i18n } = useTranslation(['main']);
    
        return (
            <>
                <section className="portfolio content my-5" id="portfolio">
                    <p>This is the <strong>Portfolio</strong> section</p>
                </section>
            </>
        )
    
}