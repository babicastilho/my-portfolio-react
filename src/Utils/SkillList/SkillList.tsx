import React, { useState, } from 'react';
import { Skill } from '../../data/skills';

import './_skilllist.scss';

export default function SkillList({
    name,
    label,
    color,
    category,
    icon,
    level
}: Skill) {

    const [hoveredClass, setHoveredClass] = useState('');

    return (
        <li id={name} className="skillItem">
            <span 
                className="image" 
                style={hoveredClass === "spanImage" ? { backgroundColor: color+'33', } : { backgroundColor: color+'1a', }}
                onMouseEnter={() => setHoveredClass("spanImage")} 
                onMouseLeave={() => setHoveredClass('')}
            >
                <img src={icon}></img>
            </span>
            <span className="name">{label}</span>
        </li>
    );
} 