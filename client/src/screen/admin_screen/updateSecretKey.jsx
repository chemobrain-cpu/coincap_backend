import React, { useState, useCallback, useEffect } from 'react';
import NavBar from "../../component/UserNav"
import FormInput from "../../component/input-card/input";
import styles from "./updateSecretKey.module.css";
import SubmitBtn from "../../component/Submit";
import Footer from "../../component/Footer";
import { changeSecretKey, checkAdminCode } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal";
import SelectCard from '../../component/formSelect'

let ForgetSecretKeyScreen = () => {
    let [userKey, setUserKey] = useState("")
    let [isKeyError, setIsKeyError] = useState("")
    let [isError, setIsError] = useState(false)
    let [adminType, setAdminType] = useState("")
    let [secretCode, setSecretCode] = useState("")
    let [adminTypeStatus, setAdminTypeStatus] = useState(true)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const { id } = useParams()

    let checkCodeVerification = useCallback(async () => {
        let res = await dispatch(checkAdminCode(id))
        if(!res.bool){
            throw new Error(res.message)
        }
        return res
    },[])

    //check if the code exist
    useEffect(() => {
        checkCodeVerification().then(res => {
            setSecretCode(res.message)
            setIsLoading(false)
        }).catch(res => {
            //navigate back to previous 
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            setTimeout(()=>{
                navigate(`/forgetsecretkey`)
            },4000)
            
        })

    }, [checkCodeVerification])


    let setFormDetails = useCallback(e => {
        if (e.formName === "key") {
            let formValue = e.value
            setUserKey(formValue)
            setIsKeyError(e.error)
        }
    }, [])

    let isFormValid = userKey && !isKeyError && adminType

    let submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)
        let res = await dispatch(changeSecretKey({
            userKey,
            adminType,
            secretCode
        }))
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

    let changeAdminType = (e) => {
        setAdminType(e.target.value)
        if (e.target.value === 'Master admin') {
            setAdminTypeStatus(true)
        } else {
            setAdminTypeStatus(false)

        }
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
                type='text'
                className='formCard'
                setFormDetails={setFormDetails}
                formName="key"
                placeholder=''
            />
            {/*replace with thhe select card so one can choose what kind of admin*/}


            <SelectCard
                title='Select Admin Type'
                changeHandler={changeAdminType}
                status={adminTypeStatus}
                option_1='Master admin'
                option_2='Sub admin'
            />


            <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text="send password" />
        </form>
        <Footer />

    </>

}

export default ForgetSecretKeyScreen