import React from 'react';
import styles from './MySkills.module.css'
import Skill from './Skill/Skill';

const MySkills = () => {
    return (
        <section className={styles.container}>
            <div className={styles.skills}>
                <h2 className={styles.skills_text}>
                    Мои скилы
                </h2>
                <div className={styles.skill_box}>
                    <Skill
                        imgTechnology={"https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg"}
                        nameTechnology={"React"} descriptionSkill={"Знание библиотеки React"}/>
                    <Skill imgTechnology={"https://miro.medium.com/max/800/1*ZxmcaOzul181U6BT5z-Ipw.png"}
                           nameTechnology={"Redux"} descriptionSkill={"Знание библиотеки Redux"}/>
                    <Skill
                        imgTechnology={"https://habrastorage.org/getpro/habr/post_images/99b/37e/278/99b37e278226b136bac04f85ab8e238c.png"}
                        nameTechnology={"Jquery"} descriptionSkill={"Знание библиотеки Jquery"}/>
                </div>

            </div>


        </section>
    );
};

export default MySkills;