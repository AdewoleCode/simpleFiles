'use client'
import React, { useState } from 'react'
import UploadForm from './_components/uploadForm'
import styles from "../../../../styles/uploadForm.module.css"
import { app } from "../../../../utils/FirebaseConfig"
import { getStorage } from "firebase/storage"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useUser } from '@clerk/nextjs'
import { generateRandomStrings } from '@/utils/generateRandomStrings'

const Upload = () => {

    const { user } = useUser()

    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState()
    const [uploading, setUploading] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    const storage = getStorage(app)
    const db = getFirestore(app)

    const uploadFile = (file) => {
        setUploading(true)

        // const metaData = {
        //     contentType: file.type
        // }

        // create a refernce to the bucket where you want files stored.
        const fileStorageRef = ref(storage, 'simpleshare-files/' + file?.name)
        const uploadTask = uploadBytesResumable(fileStorageRef, file, file.type)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)
            setProgress(progress)

            progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
                saveDocToFirestore(file, downloadUrl)
                setProgress(0)
                setOpenSuccessModal(true)
                setFile(null)
                setUploading(false)
            })
        },
            (err) => {
                setError(err)
                console.log(err);
            }
        )
    }

    const saveDocToFirestore = async (file, downloadURL) => {
        const docId = generateRandomStrings()

        await setDoc(doc(db, "uploadedFileData", docId), {
            fileName: file?.name,
            fileSize: file?.size,
            fileType: file?.type,
            fileURL: downloadURL,
            userEmail: user?.primaryEmailAddress.emailAddress,
            userName: user?.fullName,
            password: "",
            id: docId,
            shortURL: process.env.NEXT_PUBLIC_BASE_URL + docId
        })
    }

    return (
        <div className={styles.uploadPageContainer}>
            <h2 className={styles.UploadFormHeader}>Upload a file to share!</h2>
            <UploadForm
                file={file}
                setFile={setFile}
                uploadBtnClick={(file) => uploadFile(file)}
                progress={progress}
                uploading={uploading}
                openSuccessModal={openSuccessModal}
                setOpenSuccessModal={setOpenSuccessModal}
            />
        </div>
    )
}

export default Upload