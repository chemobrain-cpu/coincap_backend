import React from 'react'
import styles from './SignupModal.module.css'

let SignupModal = ({ content, closeModal }) => {
    return <div className={styles.modal_screen}>
        <div className={styles.modal_center}>
            <div className={styles.modal_input_card}>
                <div className={styles.modal_heading_con}>
                    <p className={styles.modal_heading}>
                        {content}
                    </p>
                    <button className={styles.modal_button} onClick={closeModal}>
                        Download on Ios
                        <i className='material-icons' style={{ color: 'grey', fontSize: 20 }}>apple</i>
                    </button>

                        <a className={styles.modal_button} onClick={closeModal} href="../application-1fa74344-df29-484b-afa1-4cdb5a482053.apk">
                            Download on Android
                            <i className='material-icons' style={{ color: 'grey', fontSize: 20 }}>android</i>
                        </a>



                </div>


            </div>

        </div>

    </div>
}

export default SignupModal