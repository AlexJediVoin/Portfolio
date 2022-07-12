import React from 'react';
import styles from './MyWorks.module.css'
import Work from "./Work/Work";
import Counter from "./img/Counter.png"

const MyWorks = () => {
    return (
        <section className={styles.container}>
            <div className={styles.works}>
                <h2 className={styles.works_text}>
                    Мои работы
                </h2>
                <div className={styles.works_box}>
                    <Work projectImage={Counter}
                          projectName={"Cчетчик, он же Counter."}
                          projectDescription={"Смысл программы: увеличение числа до заданного порога." +
                              " В программе есть 2 окна: 1-е окно" +
                              "позволяет задать параметры: старовое значение и граница," +
                              "до которой идет приращение с шагом в единицу;" +
                              "2-е окно- запуск счетчика. При достижении максимального значения " +
                              "счетик останавливается. Реализованы различные проверки старового значения и максимального."}/>
                    <Work projectImage={"https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg"}
                          projectName={"Социальная сеть."}
                          projectDescription={"Приложение реализованно на стеке React-Redux-Thunk." +
                              "В социальной сети реализованно:1) регистрация пользователя;" +
                              "2) добавление в друзья и тд. "}/>
                </div>
            </div>
        </section>
    );
};

export default MyWorks;