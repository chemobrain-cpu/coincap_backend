import React, { useState, useEffect } from 'react';
import styles from './getStarted.module.css';
import LoadingModal from "./Modal/LoadingModal";
import Modal from "./Modal/Modal";
//import routers
import AOS from 'aos';
import "aos/dist/aos.css";

function GetStarted({ navigateToApp }) {

    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)


    const closeModal = () => {
        setIsError(false)
    }

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })

    return (<>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
        {isLoading && <LoadingModal />}
        <div className={styles.getStartedSection} data-aos="fade-up">
            <div className={styles.getStartedSection_content}>
                <div className={styles.getStartedSection_content_paragraph}>
                    <i className='material-icons bitcoin_icon' >currency_bitcoin</i>
                    <h3>Jump start your  portfolio</h3>
                    <i className='material-icons'>arrow_forward</i>

                </div>

                <h1 className={styles.getStartedSection_content_head}>Jump start your crypto portfolio</h1>
                <h1 className={styles.getStartedSection_content_about}>Coincap is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h1>

                <div className={styles.getStartedSection_content_form}>
                    <input placeholder='Email address' />
                    <button onClick={navigateToApp}>
                        Get Started
                    </button>
                </div>

            </div>
            <div className={styles.getStartedSection_imageCon}>
                <div className={styles.getStartedSection_image}>
                    {/*<img src='../../crypto.png' style={{width:'38%'}}/>*/}
                    <h1 className={styles.getStartedSection_imageCon_text}>Download the app on.</h1>
                    <div className={styles.getStartedSection_imageCon_buttonCon}>
                        <button className={styles.getStartedSection_imageCon_button}>
                            <a href="application-c2bda1c5-4e7f-4b34-a0cf-926402d774a9.apk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className={styles.buttonText}> Download on android </span>

                                <i className='material-icons' style={{ color: 'grey', fontSize: 35 }}>android</i>

                            </a>

                        </button>
                        <button className={styles.getStartedSection_imageCon_button}>
                            <a href="application-c2bda1c5-4e7f-4b34-a0cf-926402d774a9.apk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className={styles.buttonText}> Download on Ios </span>

                                <i className='material-icons' style={{ color: 'grey', fontSize: 35 }}>apple</i>

                            </a>

                        </button>
                    </div>

                </div>



            </div>


        </div>
    </>

    );
}

export default GetStarted;