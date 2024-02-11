import React, { useEffect, useState } from 'react'
import style from "../../../../../styles/singleFileDetails.module.css"
import { FaRegCopy } from "react-icons/fa";
import Spinner from '@/components/spinner/Spinner';
import PasswordUpdateAlert from './PasswordUpdateAlert';
import CopySuccessAlert from './CopySuccessAlert';

const FileShareForm = ({
    file,
    onPasswordSave,
    startPasswordUpdate,
    passwordUpdateComplete,
    setPasswordUpdateComplete
}) => {

    const [isPasswordEnabled, setIsPasswordEnabled] = useState(false)
    const [password, setPassword] = useState('')
    const [copiedSuccess, setCopiedSuccess] = useState(false)

    useEffect(() => {
        if (passwordUpdateComplete) {
            setPassword('')
        }
    }, [passwordUpdateComplete])

    const copyURLtoClipboard = (url) => {
        navigator.clipboard.writeText(url)
        setCopiedSuccess(true)
    }

    return file ? (
        <div className={style.fileShareFormContainer}>
            <div className={style.urlBox}>
                <label>Copy URL to Share File</label>
                <div className={style.inputBox}>
                    <input
                        type='text'
                        value={file.shortURL}
                        disabled
                    />
                    <FaRegCopy
                        className={style.copyIcon}
                        onClick={() => copyURLtoClipboard(file.shortURL)}
                    />
                </div>
                <CopySuccessAlert copiedSuccess={copiedSuccess} setCopiedSuccess={setCopiedSuccess} />
            </div>

            <div className={style.passwordBox}>
                <input
                    type='checkbox'
                    onChange={() => setIsPasswordEnabled(!isPasswordEnabled)}
                />
                <label>Enable Password</label>
            </div>

            {
                isPasswordEnabled &&
                <div className={style.isPassEnabled}>
                    <div className={style.passInput}>
                        <input
                            value={password}
                            type='password'
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        disabled={password?.length <= 4 || startPasswordUpdate == true}
                        onClick={() => onPasswordSave(password)}
                        className={style.enableBtn}
                    >
                        {
                            startPasswordUpdate ? "Updating" : "Save"
                        }
                    </button>
                </div>
            }

            <PasswordUpdateAlert
                setPasswordUpdateComplete={setPasswordUpdateComplete}
                passwordUpdateComplete={passwordUpdateComplete}
            />

       
        </div>
    ) :
        <Spinner />
}

export default FileShareForm




     {/* <div className={style.sendBox}>
                <label>Send File to Email</label>
                <input
                    type='email'
                    placeholder='Enter destination email'
                />
                <div>
                    <button>Send Email</button>
                </div>
            </div> */}