import React, { Component } from 'react';
import SkillBar from '../../../Utils/SkillBar/SkillBar';


const skillsMap = [
    { type: "HTML", level: 95 },
    { type: "CSS", level: 90 },
    { type: "SASS/SCSS", level: 65 },
    { type: "BootStrap", level: 70 },
    { type: "JavaScript", level: 70 },
    { type: "TypeScript", level: 50 },
    { type: "React.js", level: 45 },
    { type: "Angular.js", level: 15 },
    { type: "PHP", level: 60 },
    { type: "Photoshop", level: 40 },
    { type: "Figma", level: 55 }
];

export default class Skill extends Component {
    render() {
        return (
            <>
                {skillsMap.map((item, idx) => (
                    <SkillBar
                        key={idx}
                        type={item.type}
                        completed={item.level}
                    />
                ))}
            </>
        )
    }
}