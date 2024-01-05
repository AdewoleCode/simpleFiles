import React from 'react'
import style from "../../../../../styles/SuccessPopUp.module.css"
import { GiPartyPopper } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { Bounce } from 'react-reveal';

const SucessPopUp = ({ isOpen, setIsOpen }) => {
    return (
        <div>
            {
                isOpen && (
                    <Bounce center duration={1500}>
                        <div className={style.formboxContainer} onClick={() => setIsOpen(false)}>
                            <div className={style.successBox}>
                                <h3>Upload Success!</h3>
                                <GiPartyPopper className={style.successIcon} />
                                <MdCancel className={style.cancelIcon} onClick={() => setIsOpen(false)} />
                            </div>
                        </div>
                    </Bounce>
                )
            }
        </div>
    )
}

export default SucessPopUp