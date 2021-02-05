import React from 'react';
import './SkillCard.css';

function SkillCard({ skill }: Props) {
    return (
        <div className="skill-card-main">
            <div className="skill-icon">
                <i className={skill.fontAwesome}/>
            </div>
            <div className="skill-text">
                <p>{skill.text}</p>
            </div>
            <div className="skill-progress-bar">
                <span style={{width: `${skill.proficiency}%`}}/>
                <p>{skill.proficiency}%</p>
            </div>
        </div>
    );
}
interface Props {
    skill: {
        fontAwesome: string,
        text: string,
        proficiency: number
    }
}
export default SkillCard;