import React, { useState, useEffect } from 'react'
import style from "../../../../styles/FileView.module.css"
import Spinner from '@/components/spinner/Spinner'
import { FaDownload } from "react-icons/fa6";

const FileViewItem = ({ file }) => {

    const [password, setPasword] = useState("")
    const [fileType, setFileType] = useState()

    useEffect(() => {
        file && setFileType(file?.fileType.split('/')[0])
    }, [file])


    return file ? (
        <div className={style.fileViewBox}>
            <h3 className={style.share}><span>{file.userName}</span> Shared a file with you</h3>
            <p className={style.detail}>details below</p>

            <img
                className={style.fileViewBoxImage}
                src={file && fileType == "image" ? file?.fileURL : "/file2.png"}
                alt="image"
            />

            <div className={style.fileDetails}>
                <h2>{file?.fileName}</h2>
                <p>
                    {file?.fileType} / {(file.fileSize / 1024 / 1024).toFixed(2)}MB
                </p>
            </div>

            {
                file.password.length >= 4 ?
                    <input
                        className={style.input}
                        type="text"
                        placeholder='Enter Password To Access File'
                        onChange={(e) => setPasword(e.target.value)}
                    /> : null
            }

            <button
                className={style.buttonBox}
                onClick={() => window.open(file?.fileURL)}
                disabled={file.password !== password}
            >
                <FaDownload />
                Download
            </button>

        </div>
    ) : <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Spinner />
    </div>
}

export default FileViewItem