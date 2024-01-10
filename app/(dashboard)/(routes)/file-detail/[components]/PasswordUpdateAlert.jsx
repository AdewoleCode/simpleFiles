import React from 'react'
import { GiPartyPopper } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import style from "../../../../../styles/singleFileDetails.module.css"
import { Bounce } from 'react-reveal';

const PasswordUpdateAlert = ({
    passwordUpdateComplete,
    setPasswordUpdateComplete
}) => {

    return passwordUpdateComplete && (
        <Bounce center duration={1500}>
            <div className={style.updateAlertBox}>
                <MdCancel className={style.cancelIcon} onClick={() => setPasswordUpdateComplete(false)} />
                <GiPartyPopper style={{ width: '70px', height: '70px' }} />
                <h3>Password Updated Succesfully!!!</h3>
            </div>
        </Bounce>
    )
    
}

export default PasswordUpdateAlert