import React, { Component } from 'react'
import { useTranslation } from "react-i18next";

export default function About (){
    // translate
    const { t, i18n } = useTranslation(['main']);
    
        return (
            <>
                <section className="about content" id="about">
                    <p>This is the <strong>About</strong> section</p>
                </section>
            </>
        )
    
}