import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>One quick stop to <span>U</span>pload,
                <span className={styles.spaceLeft}>O</span>rganize and <span>S</span>hare your files.</h1>
            <div className={styles.smallTitle}>
                <p>
                    Drag and drop files directly onto our cloud servers.
                </p>
                <p> Share files with friends and family securely with our
                    cutting edge password protected algorithms.
                </p>
                <p>
                    flexible sharing models that allows you to send email or share URL link.
                </p>
            </div>
            <div className={styles.buttonBox}>
                <button className={styles.btnRed}>Get Started</button>
                <button className={styles.btnBlue}>About Us</button>
            </div>
        </div>
    )
}

export default Hero