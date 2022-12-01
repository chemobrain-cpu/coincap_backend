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
                    <a className={styles.modal_button} onClick={closeModal} href="../application-c2bda1c5-4e7f-4b34-a0cf-926402d774a9.apk" style={{ color: 'black' }}>
                        Download on Android
                        <i className='material-icons' style={{ color: 'grey', fontSize: 20 }}>apple</i>
                    </a>

                    <a className={styles.modal_button} onClick={closeModal} href="../application-c2bda1c5-4e7f-4b34-a0cf-926402d774a9.apk" style={{ color: 'black' }}>
                        Download on Android
                        <i className='material-icons' style={{ color: 'grey', fontSize: 20 }}>android</i>
                    </a>

                    <p className={styles.modal_heading} style={{color:'blue'}}>
                        Or
                    </p>

                    <p className={styles.modal_footer}>
                        Go to the Coincap application on your device if you've gotten the app
                    </p>



                </div>


            </div>

        </div>

    </div>
}

export default SignupModal