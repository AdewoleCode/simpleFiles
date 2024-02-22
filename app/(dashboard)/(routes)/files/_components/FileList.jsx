import SingleFileItem from './SingleFileItem'
import styles from "../../../../../styles/fileList.module.css"
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { app } from '@/utils/FirebaseConfig'
import Spinner from '@/components/spinner/Spinner'
import { useUser } from '@clerk/nextjs'

const FileList = ({ fileList, fetchingFile }) => {

    const user = useUser()

    const db = getFirestore(app)

    const deleteFile = async (file) => {
        await deleteDoc(doc(db, "uploadedFileData", file.id))
    }

    return (
        <>
            <div className={styles.fileListContainer}>

                <div className={styles.top}>
                    <p>Welcome, <span>{user?.user.firstName}</span> </p>
                    <h2>FILES</h2>
                </div>

                <div className={styles.subHead}>
                    <p className={styles.name}>Name</p>
                    <p className={styles.size}>size</p>
                    <p className={styles.type}>type</p>
                </div>


                {
                    fetchingFile ? <Spinner /> :
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
                        }) : <h1>You currently do not have any file uploaded. please upload a file to share!</h1>
                }
            </div>
        </>
    )
}

export default FileList