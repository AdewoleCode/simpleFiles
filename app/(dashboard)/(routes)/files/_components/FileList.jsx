import React from 'react'
import SingleFileItem from './SingleFileItem'
import styles from "../../../../../styles/fileList.module.css"
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { app } from '@/utils/FirebaseConfig'
import Spinner from '@/components/spinner/Spinner'

const FileList = ({ fileList }) => {

    const db = getFirestore(app)

    const deleteFile = async (file) => {
        await deleteDoc(doc(db, "uploadedFileData", file.id))
    }

    return (
        <>
            <div className={styles.fileListContainer}>

                <div className={styles.top}>
                    <h2>FILES</h2>
                    <p>20mb used of 50mb</p>
                </div>

                <div className={styles.subHead}>
                    <p className={styles.name}>Name</p>
                    <p className={styles.size}>size</p>
                    <p className={styles.type}>type</p>
                </div>
                {
                    fileList.length > 0 ? fileList.map((file, index) => {
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
                            />
                        )
                    }) : <Spinner />
                }


            </div>

        </>
    )
}

export default FileList