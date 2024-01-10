import React, { useEffect, useState } from 'react'
import style from "../../../../../styles/singleFileDetails.module.css"
import Spinner from '@/components/spinner/Spinner'

const FileDetail = ({ file }) => {

    const [fileType, setFileType] = useState()

    useEffect(() => {
        file && setFileType(file?.fileType.split('/')[0])
    }, [file])


    return file ? (
        <div className={style.fileDetailBox}>
            <div className={style.topfileDetailBox} style={{ margin: "0 auto" }}>
                <img
                    width={'100%'}
                    height={'220px'}
                    src={file && fileType == "image" ? file?.fileURL : "/file.png"}
                    alt="image"
                />
                {/* <Image src={fileType == "image" ? file?.fileURL : "/file.png"}  width={100} height={100}/> */}
            </div>

            <div className={style.bottomFileDetailBox}>
                <h2>{file?.fileName}</h2>
                <p>
                    {file?.fileType} / {(file.fileSize / 1024 / 1024).toFixed(2)}MB
                </p>
            </div>
        </div>
    ) : <Spinner />
}

export default FileDetail