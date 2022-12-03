import React, { useState, useCallback, useEffect } from 'react';
import NavBar from "../../component/UserNav"
import FormInput from "../../component/input-card/input";
import styles from "./udateSecretKey.module.css";
import SubmitBtn from "../../component/Submit";
import Footer from "../../component/Footer";
import { checkEmail, emailAdmin } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"

let ForgetSecretKeyScreen = () => {
    let [userEmail, setUserEmail] = useState("")
    let [isEmailError, setIsEmailError] = useState("")
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let sendEmailToAdmin = useCallback(async () => {
        let res = await dispatch(emailAdmin())
        if (!res) {
            throw new Error(res.message)
        }

    }, [])

    //send email to master administrator
    useEffect(() => {
        sendEmailToAdmin().then((data) => {
            //do something with data
            alert(data)
        }).catch((err) => {
            setIsLoading(false)
            alert(err.message)
        })

    }, [sendEmailToAdmin])




    let setFormDetails = useCallback(e => {
        if (e.formName === "userEmail") {
            let formValue = e.value
            setUserEmail(formValue)
            setIsEmailError(e.error)
        }
    }, [])

    let isFormValid = userEmail && !isEmailError

    let submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)
        let res = await dispatch(checkEmail(userEmail))
        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        setIsError(true)
        setIsErrorInfo(res.message)
        setIsLoading(false)


    }

    const closeModal = () => {
        setIsError(false)
        setIsErrorInfo("")
    }



    return <>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
        {isLoading && <LoadingModal />}
        <NavBar />
        <form className={styles.form_container} onSubmit={submitHandler}>

            <FormInput
                label="Enter new secret key"
                type='number'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="userEmail"
            />
            {/*replace with thhe select card so one can choose what kind of admin*/}

            <FormInput
                label="Enter the code send to master admin"
                type='number'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="userEmail"
            />

            <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text="send password" />
        </form>
        <Footer />

    </>

}

export default ForgetSecretKeyScreen