'use client'
import React, { useState } from 'react'
import UploadForm from './_components/uploadForm'
import styles from "../../../../styles/uploadForm.module.css"
import { app } from "../../../../utils/FirebaseConfig"
// import ref
import { getStorage } from "firebase/storage"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const Upload = () => {

    const [url, seturl] = useState()

    const storage = getStorage(app)

    const uploadFile = (file) => {

        const metaData = {
            contentType: file.type
        }

        // create a refernce to the bucket where you want files stored.
        const fileStorageRef = ref(storage, 'simpleshare-files/' + file?.name)
        const uploadTask = uploadBytesResumable(fileStorageRef, file, file.type)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)

            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                console.log(`file available at` + url);
                seturl(url)
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
            <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
            <a href={url}><h3>{url}</h3></a>
        </div>
    )
}

export default Upload