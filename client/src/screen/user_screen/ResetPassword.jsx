import React, { useState, useCallback, useEffect } from 'react';
import NavBar from "../../component/UserNav"
import FormInput from "../../component/input-card/input";
import styles from "./ResetPassword.module.css";
import SubmitBtn from "../../component/Submit";
import Footer from "../../component/Footer";
import { resetPassword } from "../../store/action/userAppStorage";
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"

let ResetPasswordScreen = () => {
    let [userPassword, setUserPassword] = useState("")
    let [userConfirmPassword, setUserConfirmPassword] = useState("")
    let [isPasswordError, setIsPasswordError] = useState("")
    let [isConfirmPasswordError, setIsConfirmPasswordError] = useState("")
    let [isMatchError, setIsMatchError] = useState("")
    let [isMatchErrorInfo, setIsMatchErrorInfo] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')

    let { id } = useParams()
    let dispatch = useDispatch()

    let setFormDetails = (e) => {
        if (e.formName === "userPassword") {
            let formValue = e.value
            setUserPassword(formValue)
            setIsPasswordError(e.error)
        } else if (e.formName === "userConfirmPassword") {
            let formValue = e.value
            setUserConfirmPassword(formValue)
            setIsConfirmPasswordError(e.error)
        }
    }

    useEffect(() => {
        if (userPassword == '' || userConfirmPassword == '') {
            setIsMatchError(true)
            setIsMatchErrorInfo('')
            return
        }
        if (userPassword !== userConfirmPassword) {
            setIsMatchError(true)
            setIsMatchErrorInfo('password does not match')
            return
        } else {
            setIsMatchError(false)
            setIsMatchErrorInfo('')
            return
        }
    }, [userPassword, userConfirmPassword])

    let isFormValid = userPassword && userConfirmPassword && !isPasswordError && !isConfirmPasswordError && !isMatchError

    let submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        let res = await dispatch(resetPassword({
            id: id,
            password: userPassword
        }))
        if (!res.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(res.message)
        } else {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(res.message)
        }
    }


    const closeModal = ()=>{
        setIsError(false)
      }


    return <>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
        {isLoading && <LoadingModal />}
        <NavBar />
        <form className={styles.form_container} onSubmit={submitHandler}>
            <FormInput
                label="new password"
                icon='edit'
                types="password"
                className="formcard"
                type='number'
                setFormDetails={setFormDetails}
                formName="userPassword"
            />

            <FormInput
                label="confirm password"
                icon='edit'
                className="formcard"
                types="password"
                type='number'
                setFormDetails={setFormDetails}
                formName="userConfirmPassword"
            />

            {isFormValid && <SubmitBtn style={{ opacity: 1 }} text="Reset Password" />}

            {!isFormValid && <SubmitBtn style={{ opacity:0.5 }} text="Reset Password" />}
            {/* error*/}
            {isMatchError? <p className={styles.error}>{isMatchErrorInfo}</p>:<p className={styles.error}></p>}
        </form>
        <Footer />

    </>

}

export default ResetPasswordScreen