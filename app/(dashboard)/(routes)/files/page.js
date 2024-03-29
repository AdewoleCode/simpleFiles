'use client'

import React, { useEffect, useState } from 'react'
import { collection, getDocs, where, query, getFirestore } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import FileList from './_components/FileList'
import { app } from '../../../../utils/FirebaseConfig'
import Spinner from '@/components/spinner/Spinner'


const Files = () => {
  const db = getFirestore(app)
  const { user } = useUser()
  const [fileList, setFileList] = useState([])
  const [fetchingFile, setFetchingFile] = useState(false)

  useEffect(() => {
    console.log(user);
    user && getFileList()
  }, [user])

  // delete from firestore funtion
  //  fetch all files from user from firestore
  // add a search functionality later from list of files
  // cummulate total file size of file and do the out of 50mb stuff.

  const getFileList = async () => {

    setFetchingFile(true)

    const q = query(collection(db, "uploadedFileData"),
      where("userEmail", "==", user?.primaryEmailAddress.emailAddress,
      ))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setFileList(fileList => ([...fileList, doc.data()]))
    })
    setFetchingFile(false)
  }


  return (
    <div>
      {
        user ?
          <FileList
            fetchingFile={fetchingFile}
            fileList={fileList}
          /> :
          <Spinner />
      }
    </div>
  )
}

export default Files