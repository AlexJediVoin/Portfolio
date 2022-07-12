import React from 'react';
import styles from './Work.module.css'

type PropsType = {
    projectImage: string;
    projectName: string;
    projectDescription: string;
}
const Work: React.FC<PropsType> = ({projectImage, projectName, projectDescription}) => {
    return (
        <div className={styles.work_container}>
            <div className={styles.work_part1}>
                <img className={styles.img_work} src={projectImage} alt={"Проект портфолио"}>
                </img>
                <button className={styles.btn_see}>
                    Смотреть
                </button>
            </div>
            <div className={styles.work_part2}>
                <div className={styles.project_name}>
                    {projectName}
                </div>
                <div className={styles.description_project}>
                    {projectDescription}
                </div>
            </div>
        </div>

    );
};

export default Work;