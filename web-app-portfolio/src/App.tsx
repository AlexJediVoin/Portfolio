import React from 'react';
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Wellcome from "./Components/Main/Section_Wellcome/Wellcome";
import MySkills from "./Components/Main/Section_Skills/MySkills";
import MyWorks from './Components/Main/Section_Works/MyWorks';


const App = () => {
    return (
        <div className={styles.app_container}>
            <Header/>
            <main className={styles.main}>
                <Wellcome/>
                <MySkills/>
                <MyWorks/>
            </main>
        </div>
    );
}

export default App;
