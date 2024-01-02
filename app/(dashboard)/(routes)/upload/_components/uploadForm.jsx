import React, { useState } from 'react'
import styles from "../../../../../styles/uploadForm.module.css"
import AlertMessage from './AlertMessage'
import FilePreview from './FilePreview'
import { BsCloudUpload } from "react-icons/bs"

const uploadForm = () => {
    const [file, setFile] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const onFileSelect = (file) => {
        console.log(file);

        if (file && file.size > 2000000) {
            setErrorMsg('File Too Large')
            return;
        } else {
            setErrorMsg(null)
            setFile(file)
        }
    }

    return (
        <>
            <div className={styles.uploadFormContainer}>
                <div className={styles.labelWrapper}>
                    <label htmlFor="dropZoneFile" className={styles.labelFor}>
                        <BsCloudUpload className={styles.formIcon} />
                        <p>
                            Click to Upload or Drag and Drop file
                        </p>
                        <h4>
                            files supported includes SVG, PNG, PDF, MP4, MP3 (max size 2MB)
                        </h4>
                    </label>
                    <input
                        type="file"
                        id='dropZoneFile'
                        onChange={(event) => onFileSelect(event.target.files[0])}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
            {
                errorMsg && <AlertMessage message={errorMsg} />
            }
            {
                file && <FilePreview file={file} setFile={setFile} />
            }
            <div className={styles.uploadFormBtnWrapper}>
                <button
                    className={styles.uploadFormBtn}
                    disabled={!file}>
                    Upload
                </button>
            </div>
        </>
    )
}

export default uploadForm