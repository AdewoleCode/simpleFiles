import Image from 'next/image'
import React from 'react'
import styles from "../../../../../styles/FilePreview.module.css"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";

const FilePreview = ({ file, setFile }) => {
    return (
        <div className={styles.FilePreviewWrapper}>
            <div
                className={styles.filePreviewContainer}
            >
                <FaFileAlt className={styles.previewIcon}/>
                <div>
                    <h2>{file.name}</h2>
                    <p>
                        {file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
                    </p>
                </div>
            </div>

            <span onClick={() => setFile(null)}>
                <IoMdCloseCircleOutline className={styles.closePreview}/>
            </span>
        </div>

    )
}

export default FilePreview