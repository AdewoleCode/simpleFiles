import React from 'react'
import SingleFileItem from './SingleFileItem'
import styles from "../../../../../styles/fileList.module.css"
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { app } from '@/utils/FirebaseConfig'


const FileList = ({ fileList }) => {
    const db = getFirestore(app)

    const deleteFile = async (file) => {
        alert('deleting...')
        s
    }

    return (
        <div className={styles.fileListContainer}>

            <div className={styles.top}>
                <h2>FILES</h2>
                <p>20mb used of 50mb</p>
            </div>

            <div className={styles.subHead}>
                <p>Name</p>
                <p>size</p>
                <p>type</p>
            </div>
            {
                fileList && fileList.map((file, index) => {
                    return (

                        <SingleFileItem
                            file={file}
                            deleteFile={deleteFile}
                            key={index}
                            name={file.fileName}
                            imageSrc='/file2.png'
                            type={file.fileType}
                            size={file.fileSize}
                            fileDocId={file.id}
                        // file={file} key={index} 
                        />

                    )
                })
            }

        </div>
    )
}

export default FileList