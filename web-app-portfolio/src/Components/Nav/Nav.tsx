import React from 'react';
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.main_nav}>
                <li><a href={"#"}>Главное</a></li>
                <li><a href={"#"}>Скилы</a></li>
                <li><a href={"#"}>Работы</a></li>
                <li><a href={"#"}>Контакты</a></li>
            </ul>
        </nav>
    );
};

export default Nav;