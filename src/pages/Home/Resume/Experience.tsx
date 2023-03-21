import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

import { StickyList } from '../../../components/StickyList/StickyList';

let experienceList = [
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        start: '2004',
        end: '2007',
        place: 'Lorem Ipsum Dolor Sit Amet',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.',
    },
    {
        id: 2,
        title: 'Lorem Ipsum Dolor Sit Amet',
        start: '2004',
        end: '2007',
        place: 'Lorem Ipsum Dolor Sit Amet',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.',
    },
    {
        id: 3,
        title: 'Lorem Ipsum Dolor Sit Amet',
        start: '2004',
        end: '2007',
        place: 'Lorem Ipsum Dolor Sit Amet',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.',
    },
]


export default class Experience extends Component {
    render() {
        return (
            <>
                <div className="d-flex flex-wrap sticky-list mt-5">
                    <StickyList data={experienceList} />
                </div>
            </>
        )
    }
}