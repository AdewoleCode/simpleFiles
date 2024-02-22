import { toast } from "react-toastify";
import "./ConfirmationModal.css"
import { Bounce } from "react-reveal";

const ConfirmationModal =
    ({ openConfirmation, setOpenConfirmation, deleteFile, file }) => {

        const toastOptions = {
            position: "bottom-right",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        }

        return (
            openConfirmation &&
            <Bounce duration={1000}>
                <div className='confirmation-modal-box '>
                    <div className="confirmation-modal-wrapper">
                        <h3>Are you sure you want to delete file from list?</h3>
                        <div className="btn-confirm-box">
                            <button
                                className="confirm-btn"
                                onClick={() => {
                                    deleteFile(file)
                                    setOpenConfirmation(!openConfirmation)
                                    toast.success('deleted successfully!', toastOptions)
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className="cancel-btn"
                                onClick={() => {
                                    setOpenConfirmation(false)
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </Bounce>
        )
    }


export default ConfirmationModal