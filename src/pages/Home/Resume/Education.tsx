import React, { Component } from 'react';
import { StickyList } from '../../../components/StickyList/StickyList';

let educationList = [
    {
        id: 1,
        title: 'Enginering Degree',
        start: '2004',
        end: '2007',
        place: 'Lorem Ipsum Dolor Sit Amet',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.',
    },
    {
        id: 2,
        title: 'Master Degree',
        start: '2004',
        end: '2007',
        place: 'Lorem Ipsum Dolor Sit Amet',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.',
    },
    {
        id: 3,
        title: 'Bachlor Degree',
        start: '2004',
        end: '2007',
        place: 'Lorem Ipsum Dolor Sit Amet',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.',
    },
]

export default class Education extends Component {
    render() {
        return (
            <>
                <div className="d-flex flex-wrap sticky-list mt-5">
                    <StickyList data={educationList} />
                </div>
            </>
        )
    }
}