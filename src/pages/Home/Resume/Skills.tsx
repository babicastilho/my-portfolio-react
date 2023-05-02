import skills from '../../../data/skills';
import SkillBar from '../../../Utils/SkillBar/SkillBar';
import SkillList from '../../../Utils/SkillList/SkillList';


export default function Skills() {
    let skill: string = "list";
    let type: string[] = ["Frontend", "Backend", "Tools", "Others"];
    
    let FE = skills.filter(item => item.category === type[0]).map((item, index) => (                          
        <SkillList
            key= {index}
            name={item.name}
            label={item.label}
            color={item.color}
            category={item.category}
            icon={item.icon}
            description={item.description}
        />
    ))

    const BE = skills.filter(item => item.category === type[1]).map((item, index) => (                          
        <SkillList
            key= {index}
            name={item.name}
            label={item.label}
            color={item.color}
            category={item.category}
            icon={item.icon}
            description={item.description}
        />
    ))

    const TO = skills.filter(item => item.category === type[2]).map((item, index) => (                          
        <SkillList
            key= {index}
            name={item.name}
            label={item.label}
            color={item.color}
            category={item.category}
            icon={item.icon}
            description={item.description}
        />
    ))

    const OT = skills.filter(item => item.category === type[3]).map((item, index) => (                          
        <SkillList
            key= {index}
            name={item.name}
            label={item.label}
            color={item.color}
            category={item.category}
            icon={item.icon}
            description={item.description}
        />
    ))

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
                    <p className="text-center" style={{ fontWeight: 'bold' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    
                    
                        <div className="col-12">
                            <p>{type[0]}</p>
                            <ul className="skillList">
                                {FE}
                            </ul>

                            <p>{type[1]}</p>
                            <ul className="skillList">
                                {BE}
                            </ul>

                            <p>{type[2]}</p>
                            <ul className="skillList">
                                {TO}
                            </ul>

                            <p>{type[3]}</p>
                            <ul className="skillList">
                                {OT}
                            </ul>
                        </div>
                        
                        
                    
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