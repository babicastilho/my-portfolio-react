import React, { Component } from 'react'
import { Tab, Tabs, } from 'react-bootstrap';

import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

import './_resume.scss';

export default function Resume() {
    return (
        <>
            <section className="skills content" id="skills">
                <div className="row my-5 gy-5">
                    <div className="col-md-4">
                        <h1>My expert areas</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aliquam ea illo, dicta reprehenderit non aspernatur asperiores a distinctio porro inventore necessitatibus labore sapiente vitae similique delectus molestias facere velit?
                    </div>
                    <div className="col-md-8">
                        <Tabs
                            defaultActiveKey="mySkills"
                            id="fill-tab-example"
                            className="mb-5 mx-3"
                            justify
                        >
                            <Tab eventKey="mySkills" title="Skills">
                                <Skills />
                            </Tab>
                            <Tab eventKey="myEducation" title="Education">
                                <Education />
                            </Tab>
                            <Tab eventKey="myExperience" title="Experience">
                                <Experience />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}