import React from 'react';
import styles from './Skill.module.css'

type PropsType = {
    imgTechnology: string;
    nameTechnology: string;
    descriptionSkill: string;
}
const Skill: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.skill_container}>
            <div className={styles.skill_item}>
                <img className={styles.img_technology} src={props.imgTechnology} alt={"Библиотека React"}/>
                <div className={styles.technology_name}>
                    {props.nameTechnology}
                </div>
            </div>
            <div className={styles.description_skill}>
                {props.descriptionSkill}
            </div>

        </div>

    );
};

export default Skill;