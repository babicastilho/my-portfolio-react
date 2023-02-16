import React, { Component } from 'react';
import SkillBar from '../../../Utils/SkillBar/SkillBar';



const skillsMap = [
    { type: "HTML", level: 99 },
    { type: "CSS", level: 98 },
    { type: "JavaScript", level: 87 },
    { type: "jQuery", level: 92 },
    { type: "BootStrap", level: 90 },
    { type: "Angular.js", level: 16 },
    { type: "React.js", level: 25 },
    { type: "PHP", level: 36 },
    { type: "Photoshop", level: 100 },
    { type: "Figma", level: 11 }
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