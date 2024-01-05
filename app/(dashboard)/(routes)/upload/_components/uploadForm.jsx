import React, { useState } from 'react'
import styles from "../../../../../styles/uploadForm.module.css"
import AlertMessage from './AlertMessage'
import FilePreview from './FilePreview'
import { BsCloudUpload } from "react-icons/bs"
import ProgressBar from './ProgressBar'
import SucessPopUp from './SucessPopUp'

const uploadForm = ({
    uploadBtnClick,
    progress,
    file,
    setFile,
    uploading,
    openSuccessModal,
    setOpenSuccessModal
}) => {
    const [errorMsg, setErrorMsg] = useState()

    const onFileSelect = (file) => {
        console.log(file);

        if (file && file.size > 3000000) {
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
                            files supported includes SVG, PNG, PDF, TXT, ZIP, MP3 (max size 3MB)
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
                {
                    progress > 0 ? <ProgressBar progress={progress} />
                        :
                        <button
                            className={styles.uploadFormBtn}
                            disabled={!file || uploading}
                            onClick={() => uploadBtnClick(file)}
                        >
                            {
                                uploading ? "uploading" : "upload"
                            }
                        </button>
                }
            </div>
            <SucessPopUp setIsOpen={setOpenSuccessModal} isOpen={openSuccessModal} />
        </>
    )
}

export default uploadForm