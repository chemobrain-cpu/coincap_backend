import React from 'react'
import styles from './LoginModal.module.css'

let LoginModal = ({ content, closeModal }) => {
    return <div className={styles.modal_screen}>
        <div className={styles.modal_center}>
            <div className={styles.modal_input_card}>
                <div className={styles.modal_heading_con}>
                    <p className={styles.modal_heading}>
                        {content}
                    </p>
                    <a className={styles.modal_button}onClick={closeModal} href="../application-e9cd4971-268d-4926-8b69-3d68d2c9a53a (1).apk" style={{color:'black'}}>
                            Download on Android
                            <i className='material-icons' style={{ color: 'grey', fontSize: 20 }}>apple</i>
                        </a>

                        <a className={styles.modal_button}onClick={closeModal} href="../application-e9cd4971-268d-4926-8b69-3d68d2c9a53a (1).apk" style={{color:'black'}}>
                            Download on Android
                            <i className='material-icons' style={{ color: 'grey', fontSize: 20 }}>android</i>
                        </a>



                </div>


            </div>

        </div>

    </div>
}

export default LoginModal