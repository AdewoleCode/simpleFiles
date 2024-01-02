'use client'
import React from 'react'
import UploadForm from './_components/uploadForm'
import styles from "../../../../styles/uploadForm.module.css"

const Upload = () => {
    return (
        <div className={styles.uploadPageContainer}>
            <h2 className={styles.UploadFormHeader}>Upload a file to share!</h2>
            <UploadForm />
        </div>
    )
}

export default Upload