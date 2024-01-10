'use client'
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/uploadForm'
import styles from "../../../../styles/uploadForm.module.css"
import { app } from "../../../../utils/FirebaseConfig"
import { getStorage } from "firebase/storage"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useUser } from '@clerk/nextjs'
import { generateRandomStrings } from '@/utils/generateRandomStrings'
import { useRouter } from 'next/navigation'

const Upload = () => {

    const router = useRouter()

    const { user } = useUser()

    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState()
    const [uploading, setUploading] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [fileDocId, setFileDocId] = useState()
    const [uploadCompleted, setUploadCompleted] = useState(false)

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
            setProgress(progress)

            progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
                saveDocToFirestore(file, downloadUrl)
                setProgress(0)
                setOpenSuccessModal(true)
                setFile(null)
                setUploading(false)
                setUploadCompleted(true)
            })
        }
        )
    }

    const saveDocToFirestore = async (file, downloadURL) => {
        const docId = generateRandomStrings()
        setFileDocId(docId)

        await setDoc(doc(db, "uploadedFileData", docId), {
            fileName: file?.name,
            fileSize: file?.size,
            fileType: file?.type,
            fileURL: downloadURL,
            userEmail: user?.primaryEmailAddress.emailAddress,
            userName: user?.fullName,
            password: "",
            id: docId,
            shortURL: process.env.NEXT_PUBLIC_BASE_URL + 'viewFile/' + docId
        })
    }

    useEffect(() => {
        if (uploadCompleted) {
            redirectToPreview()
        }
    }, [uploadCompleted])

    const redirectToPreview = () => {
        console.log(fileDocId);
        setTimeout(() => {
            router.push('/file-detail/' + fileDocId)
        }, 1000)
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