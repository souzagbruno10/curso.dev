import React, { useState } from 'react';
import styles from '../styles/Home.module.css';


function Home() {
    const translations = {
        ar: "الله أكبر، فلسطين حرة",
        pt: "Deus é Grande, Palestina livre!",
        en: "God is Great, Free Palestine!",
    };

    const [language, setLanguage] = useState('pt');

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{translations[language]}</h1>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.ar}`} onClick={() => setLanguage('ar')}>
                    Árabe
                </button>
                <button className={`${styles.button} ${styles.pt}`} onClick={() => setLanguage('pt')}>
                    Português
                </button>
                <button className={`${styles.button} ${styles.en}`} onClick={() => setLanguage('en')}>
                    Inglês
                </button>
            </div>
        </div>
    );
}

export default Home;
