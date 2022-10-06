import React, { useState, useEffect } from 'react';

import styles from './earnSection.module.css'
//import nav bar
import { loadCoins } from "../store/action/userAppStorage";
import { useDispatch } from "react-redux";
//importing modals
import LoadingModal from "./Modal/LoadingModal"
import Modal from "./Modal/Modal"
//import routers
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css";

function EarnSection({navigateToApp}) {
    let [userEmail, setUserEmail] = useState("")
    let [userPassword, setUserPassword] = useState("")
    let [isEmailError, setIsEmailError] = useState("")
    let [isPasswordError, setIsPasswordError] = useState("")
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [coins, setCoins] = useState([])
    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()
    //loaders state
    
    useEffect(async () => {
        let res = await dispatch(loadCoins())
        if (!res.bool) {
            alert('an error occured')
        }

        setCoins(res.message)

    }, [])

     useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })



    
    const closeModal = () => {
        setIsError(false)
    }

    return (<>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
        {isLoading && <LoadingModal />}
        <div className={styles.earn_container} data-aos="fade-up"  >
            <div className={styles.earn_section}>
                <h1>Earn up to $16 worth of crypto</h1>
                <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                <button onClick={navigateToApp}>start earning</button>
            </div>
            <div className={styles.earn_tech}>
                <div className={styles.earn_tech_content}>
                    <div className={styles.earn_tech_symbol}>
                        <div className={styles.earn_techimg_con}>
                            <img src="../../coinbase_icon1.png" />

                        </div>
                        <p className={styles.earn_techtitle}>Project Galaxy </p>


                    </div>
                    <p className={styles.earn_tech_earn_action}>Eran $3 GAL</p>


                </div>
                <div className={styles.earn_tech_content}>
                    <div className={styles.earn_tech_symbol}>
                        <div className={styles.earn_techimg_con}>
                            <img src="../../coinbase_icon2.png" />

                        </div>
                        <p className={styles.earn_techtitle}>The Sandbox</p>


                    </div>
                    <p className={styles.earn_tech_earn_action}>Eran $3 SAND</p>


                </div>
                <div className={styles.earn_tech_content}>
                    <div className={styles.earn_tech_symbol}>
                        <div className={styles.earn_techimg_con}>
                            <img src="../../coinbase_icon3.png" />

                        </div>
                        <p className={styles.earn_techtitle}>The Graph </p>


                    </div>
                    <p className={styles.earn_tech_earn_action}>Eran $3 GRT</p>


                </div>
                <p className={styles.earn_tech_paragraph}>View more<i className="material-icons">arrow_forward</i></p>


            </div>

        </div>
    </>

    );
}

export default EarnSection;