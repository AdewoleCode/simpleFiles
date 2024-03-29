import React, { useState } from 'react'
import styles from "../../../../../styles/fileList.module.css"
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from 'next/navigation';
import ConfirmationModal from '@/app/(dashboard)/(routes)/files/_components/confrimationModal/ConfirmationModal';


const SingleFileItem = ({ name, size, type, imageSrc, fileDocId, deleteFile, file }) => {
  const router = useRouter()

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className={styles.singleFileItemBox}>

        <div
          className={styles.singleFileItem}
          onClick={() => router.push('/file-detail/' + fileDocId)}
        >
          <div className={styles.imageName}>
            <img src={imageSrc ? imageSrc : "/file.png"} alt="img" />
            <h2>{name}</h2>
          </div>
          <h3>{(size / 1024 / 1024).toFixed(2)}MB</h3>
          <p> {type}</p>
        </div>

        <button
          onClick={() => {
            setOpenModal(!openModal)
          }}
        >
          <MdDeleteOutline
            size={35}
            className={styles.delete}
          />
        </button>
      </div>

      <ConfirmationModal
        openConfirmation={openModal}
        setOpenConfirmation={setOpenModal}
        deleteFile={deleteFile}
        file={file}
      />

    </>
  )
}

export default SingleFileItem