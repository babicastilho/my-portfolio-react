import skills, { Skill } from '../../../data/skills';
import SkillBar from '../../../Utils/SkillBar/SkillBar';
import SkillList from '../../../Utils/SkillList/SkillList';


export default function Skills() {
    let skill: string = "list";

    switch (skill) {
        case "bar": {
            return (
                <>
                    {skills.map((item, idx) => (
                        <SkillBar
                            key={idx}
                            type={item.label}
                            completed={item.level}
                        />
                    ))}
                </>
            )
            break;
        }
        case "list": {
            return (
                <>
                <p className="text-center" style={{fontWeight: 'bold' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ul className="skillList">
                    {skills.map((item, idx) => (
                        <SkillList
                            key = {idx}
                            name = {item.name} 
                            label = {item.label}
                            color = {item.color} 
                            category = {item.category}  
                            icon = {item.icon}                         
                        />
                    ))}
                    </ul>
                </>
            )
            break;
        }
        default: {
            return (
                <>
                    error
                </>
            )
            break;
        }
    }
}