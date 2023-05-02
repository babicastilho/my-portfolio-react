import React, { useState, } from 'react';
import { Skill } from '../../data/skills';

import { OverlayTrigger, Popover } from 'react-bootstrap';

import './_skilllist.scss';

export default function SkillList({
    name,
    label,
    color,
    icon,
    description
}: Skill) {

    let ref = React.useRef(null);

    const popover = (

        <Popover>
            <Popover.Header as="h3">{label}</Popover.Header>
            <Popover.Body>
                {description}
            </Popover.Body>
        </Popover>

    );

    const [hoveredClass, setHoveredClass] = useState('');

    return (
        <li className="skillItem">
            <OverlayTrigger
                container={ref.current}
                trigger="click"
                placement="top"
                overlay={popover}
                rootClose
            >
                <span
                    className="image"
                    style={hoveredClass === "spanImage" ? { backgroundColor: color + '33', } : { backgroundColor: color + '1a', }}
                    onMouseEnter={() => setHoveredClass("spanImage")}
                    onMouseLeave={() => setHoveredClass('')}
                >
                    <img src={icon}></img>
                </span>
            </OverlayTrigger>
            <span className="name">{label}</span>
        </li>
    );
}

