'use client'
import { doc, getFirestore, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import FileDetail from '../[components]/FileDetail.jsx'
import FileShareForm from '../[components]/FileShareForm.jsx'
import Link from 'next/link'
import style from "../../../../../styles/singleFileDetails.module.css"
import { app } from '@/utils/FirebaseConfig.js'
import { IoReturnUpBack } from "react-icons/io5";

const SingleFileDetails = ({ params }) => {

  const db = getFirestore(app)
  const [file, setFile] = useState()
  const [passwordUpdateComplete, setPasswordUpdateComplete] = useState(false)
  const [startPasswordUpdate, setStartPasswordUpdate] = useState(false)

  useEffect(() => {
    params?.fileId && getFileInfo()
  }, [file])

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFileData", params.fileId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('documentData:', docSnap.data());
      setFile(docSnap.data())
    } else {
      console.log('no such data found!');
    }
  }

  const onPasswordSave = async (password) => {
    setStartPasswordUpdate(true)
    const docRef = doc(db, "uploadedFileData", params.fileId)
    await updateDoc(docRef, {
      password: password
    })
    setStartPasswordUpdate(false)
    setPasswordUpdateComplete(true)
  }

  return (
    <div className={style.fileDetailContainer}>
      <Link
        className={style.backUpload}
        href="/upload"
      >
        <IoReturnUpBack /> Back to Upload
      </Link>
      <div className={style.subContainer}>
        <FileDetail file={file} />
        <FileShareForm
          file={file}
          startPasswordUpdate={startPasswordUpdate}
          passwordUpdateComplete={passwordUpdateComplete}
          setPasswordUpdateComplete={setPasswordUpdateComplete}
          onPasswordSave={(password) => onPasswordSave(password)}
        />
      </div>
    </div>
  )
}

export default SingleFileDetails