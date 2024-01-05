import React, { useEffect } from 'react'
import styles from "../../../../../styles/progressBar.module.css"

const ProgressBar = ({ progress, setFile }) => {


    return (
        <div className={styles.progressBarContainer}>
            <div style={{ width: `${progress}%` }} className={styles.progressBarChild}>
                <span>
                    {`${Number(progress).toFixed(0)}%`}
                </span>
            </div>
        </div>
    )
}

export default ProgressBar