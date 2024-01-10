'use client'
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '@/utils/FirebaseConfig.js'
import style from "../../../styles/FileView.module.css"
import FileViewItem from './_component/FileViewItem'

const FileView = ({ params }) => {

  const db = getFirestore(app)
  const [file, setFile] = useState()

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

  return (
    < div className={style.fileItemContainer} >
      <h3 className={style.title}>SimpleShare</h3>
      <FileViewItem file={file} />
    </div >
  )
}

export default FileView