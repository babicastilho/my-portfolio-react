import React, { Component } from 'react'
import { useTranslation } from "react-i18next";

import { Container, } from 'react-bootstrap';

import './_about.scss';

export default function About() {
    // translate
    const { t, i18n } = useTranslation(['main']);

    return (
        <>
            <section className="about content" id="about">
                <Container>
                    <div className="row gy-5 pb-5">
                        <div className="col-md-6">
                            <h1>Starter projects</h1>
                            <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
                            <ul className="icon-list ps-0">
                                <li className="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
                                <li className="text-muted d-flex align-items-start mb-1">Bootstrap Parcel starter (coming soon!)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h1>Guides</h1>
                            <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                            <ul className="icon-list ps-0">
                                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/introduction/">Bootstrap quick start guide</a></li>
                                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/webpack/">Bootstrap Webpack guide</a></li>
                                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/parcel/">Bootstrap Parcel guide</a></li>
                                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/vite/">Bootstrap Vite guide</a></li>
                                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/contribute/">Contributing to Bootstrap</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )

}