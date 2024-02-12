'use client'

import React, { useEffect, useState } from 'react'
import { collection, getDocs, where, query, getFirestore, deleteDoc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import FileList from './_components/FileList'
import { app } from '../../../../utils/FirebaseConfig'
import Spinner from '@/components/spinner/Spinner'


const Files = () => {
  const db = getFirestore(app)
  const { user } = useUser()
  const [fileList, setFileList] = useState([])
  const [totalSizeUsed, setTotalizeUsed] = useState(0)
  let totalFilesMB = 0;

  useEffect(() => {
    console.log(user);
    user && getFileList()
  }, [user])

  // delete from firestore funtion
  //  fetch all files from user from firestore
  // add a search functionality later from list of files
  // cummulate total file size of file and do the out of 50mb stuff.

  const getFileList = async () => {

    const q = query(collection(db, "uploadedFileData"),
      where("userEmail", "==", user?.primaryEmailAddress.emailAddress,
      ))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setFileList(fileList => ([...fileList, doc.data()]))
      console.log(doc.data()['size']);
      // totalFilesMB = totalFilesMB + doc.data()['size']
      // console.log(totalFilesMB);

      setTotalizeUsed(doc.data()['size'])

      // console.log((totalFilesMB/1024**2).toFixed(2) + "MB");
    })
  }


  return (
    <div>
      {
        user ? <FileList totalSizeUsed={totalSizeUsed}  fileList={fileList} /> : <Spinner />
      }

    </div>
  )
}

export default Files