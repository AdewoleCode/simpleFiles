'use client'
import React, { useState } from 'react'
import UploadForm from './_components/uploadForm'
import styles from "../../../../styles/uploadForm.module.css"
import { app } from "../../../../utils/FirebaseConfig"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { toast } from "react-toastify";

const Upload = () => {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }

    const [url, seturl] = useState()
    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState()
    const [uploading, setUploading] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)




    const storage = getStorage(app)
    const db = getFirestore(app)

    const uploadFile = (file) => {
        setUploading(true)

        const metaData = {
            contentType: file.type
        }

        // create a refernce to the bucket where you want files stored.
        const fileStorageRef = ref(storage, 'simpleshare-files/' + file?.name)
        const uploadTask = uploadBytesResumable(fileStorageRef, file, file.type)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)
            setProgress(progress)

            progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then(url => {
                toast.success("upload succesful", toastOptions)
                setProgress(0)
                setOpenSuccessModal(true)
                seturl(url)

                setFile(null)
                setUploading(false)
            })
        },
            (err) => {
                setError(err)
                console.log(err);
            },
            // () => {
            //     getDownloadURL(uploadTask.snapshot.ref).then(url => {
            //         setUrl(url)
            //         const imageCollectionRef = doc(projectFirestore, "images", file.name)
            //         setDoc(imageCollectionRef, {
            //             imageUrl: url
            //         })
            //     })
            // }
        )
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
            {/* <a href={url}><h3>{url}</h3></a> */}
        </div>
    )
}

export default Upload