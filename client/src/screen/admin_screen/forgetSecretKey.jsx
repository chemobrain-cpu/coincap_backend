import React, { useState, useCallback,useEffect } from 'react';
import NavBar from "../../component/UserNav"
import FormInput from "../../component/input-card/input";
import styles from "./forgetSecretKey.module.css";
import SubmitBtn from "../../component/Submit";
import Footer from "../../component/Footer";
import {emailAdmin,checkAdminCode } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"

let ForgetSecretKeyScreen = () => {
    let [adminCode, setAdminCode] = useState("")
    let [isAdminCodeError, setAdminCodeError] = useState("")
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let sendEmailToAdmin = useCallback(async() =>{
        let res = await dispatch(emailAdmin())
        if(!res){
            throw new Error(res.message)
        }else{
            return res.message
        }

    },[])

    //send email to master administrator
    useEffect(()=>{
        sendEmailToAdmin().then((data)=>{
            //do something with data
            setIsError(true)
            setIsErrorInfo(data)
            setIsLoading(false)
        }).catch((err)=>{
            setIsError(true)
            setIsErrorInfo(err.message)
            setIsLoading(false)
        })

    },[sendEmailToAdmin])

    let setFormDetails = useCallback(e => {
        if (e.formName === "adminCode") {
            let formValue = e.value
            setAdminCode(formValue)
            setAdminCodeError(e.error)
        }
    }, [])

    let isFormValid = adminCode && !isAdminCodeError

    let submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)
        let res = await dispatch(checkAdminCode(adminCode))
        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        //if code corresponds navigate to the change key page with the code as a url parameter
        navigate(`/updatesecretkey/${res.message}`)
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
                label="Enter the code send to master admin"
                type='number'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="adminCode"
            />

            <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text="send password" />
        </form>
        <Footer />

    </>

}

export default ForgetSecretKeyScreen