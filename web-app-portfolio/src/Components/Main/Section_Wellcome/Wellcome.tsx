import React from 'react';
import styles from './Wellcome.module.css'

const Wellcome = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wellcome}>
                <div className={styles.wellcome_about_me}>
                    <h1>
                        Привет! Меня зовут Александр.<br/> Я Front-End разработчик :)
                    </h1>
                </div>
                <img className={styles.wellcome_my_photo}
                     src={"https://img.freepik.com/free-photo/handsome-young-man-in-white-t-shirt-cross-arms-chest-and-smiling-pleased_176420-21607.jpg?w=2000"}
                     alt={"Фото фронт-енд разработчика"}></img>
            </div>
        </section>

    );
};

export default Wellcome;