import React from 'react'
import styles from  './SignupModal.module.css'

let Modal = ({content,closeModal}) => {
    return <div className={styles.modal_screen}>
        <div className={styles.modal_center}>
            <div className={styles.modal_input_card}>
                <div className={styles.modal_heading_con}>
                    <p className={styles.modal_heading}>
                        {content}
                    </p>
                    <button className='modal_button' onClick={closeModal}>
                    got it!
                </button>

                </div>
               

            </div>

        </div>

    </div>
}

export default Modal