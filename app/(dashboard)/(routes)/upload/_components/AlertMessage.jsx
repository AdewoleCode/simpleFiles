import React from 'react'
import styles from "../../../../../styles/AlerMessage.module.css"
import { MdWarning } from "react-icons/md";
import { IoReturnUpForwardOutline } from "react-icons/io5";

const AlertMessage = ({ message }) => {
    return (
        <div className={styles.alertMessageBox}>
            <div className={styles.top}>
            <h2>{message}</h2>
                <MdWarning className={styles.iconTop}/>
            </div>
            <div className={styles.bottom}>
                <p>Upgrade to Premium to Upload Larger Files</p>
                <a href="/upgrade">UPGRADE <span><IoReturnUpForwardOutline /></span></a>
            </div>
        </div >
    )
}

export default AlertMessage