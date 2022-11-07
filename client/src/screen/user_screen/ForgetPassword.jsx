import React, { useState, useCallback } from 'react';
import NavBar from "../../component/UserNav"
import FormInput from "../../component/input-card/input";
import styles from "./ForgetPassword.module.css";
import SubmitBtn from "../../component/Submit";
import Footer from "../../component/Footer";
import { checkEmail } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"

let ForgetPasswordScreen = () => {
    let [userEmail, setUserEmail] = useState("")
    let [isEmailError, setIsEmailError] = useState("")
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let dispatch = useDispatch()
    let navigate = useNavigate()

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
        <h1>Account Recovery</h1>
            <FormInput
                label="Enter account email"
                type='email'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="userEmail"
            />

            <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text="send password" />
        </form>
        <Footer />

    </>

}

export default ForgetPasswordScreen