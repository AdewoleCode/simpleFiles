import React from 'react'
import styles from "../../../../styles/news.module.css"
const page = () => {
    return (
        <div className={styles.newsBox}>
            <h1>Subscribe to our newsletter to keep up with the <br/>latest feature upgrade on simpleshare</h1>
            <div className={styles.submitBox}>
                <input type='text' placeholder='Enter your email' />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default page