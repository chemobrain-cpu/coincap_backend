import React, { useEffect, useState } from 'react';
import './Form.css';
import styles from './EmailVerifySuccess.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import { useDispatch } from "react-redux";
//importing modals
import { useParams } from "react-router-dom"
import LoadingModal from "../../component/Modal/LoadingModal"
import { confirm } from "../../store/action/userAppStorage";

//let { admin} = useSelector(state => state.userAuth)
function EmailVerificationSucessScreen() {
    //getting info from url
    const { id } = useParams()
    let dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')

    useEffect(async () => {
        let response = await dispatch(confirm(id))
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            return
        }
        setIsLoading(false)
        setIsError(false)
    }, [id])


    
    if (isLoading) {
        return <LoadingModal />
    }

    if (isError) {
        return <div className='login_screen'>
        <NavBar />
        <div className={styles.contentContainer}>
            <div className={styles.imageOuterContainer}>
                <h1 className={styles.greetings}>Verification Error</h1>

            </div>
            <div className={styles.statementSection}>
                <div className={styles.statementCon}>
                    <p className={styles.statement}>Sorry you could not be verified,maybe token as been deleted</p>

                </div>


                <button>
                    Continue on the app
                </button>

            </div>


        </div>
        <Footer />

    </div>
    }
    const closeModal = () => {
        setIsError(false)
    }

    return (<>

        <div className='login_screen'>
            <NavBar />
            <div className={styles.contentContainer}>
                <div className={styles.imageOuterContainer}>
                    <h1 className={styles.greetings}>Congratulations</h1>



                </div>





                <div className={styles.statementSection}>
                    <div className={styles.statementCon}>
                        <p className={styles.statement}>Your Email has been successfully verified,go back to the application to continue your registeration process</p>

                    </div>


                    <button>
                        Continue on the app
                    </button>

                </div>


            </div>
            <Footer />

        </div></>

    );
}

export default EmailVerificationSucessScreen;