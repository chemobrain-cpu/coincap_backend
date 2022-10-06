import React, { useState, useCallback } from 'react';
import styles from  './login.module.css';
//importing modals
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import FormInput from "../../component/input-card/input"
import SubmitBtn from "../../component/Submit";
import { signup } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

function SignupScreen() {
    let [userEmail, setUserEmail] = useState("")
    let [userPassword, setUserPassword] = useState("")
    let [userFirstName, setUserFirstName] = useState("")
    let [userLastName, setUserLastName] = useState("")

    let [isFirstNameError, setIsFirstNameError] = useState("")
    let [isLastNameError, setIsLastNameError] = useState("")
    let [isEmailError, setIsEmailError] = useState("")
    let [isPasswordError, setIsPasswordError] = useState("")
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)

    //initialising reduzx
    let dispatch = useDispatch()

    //initialising router
    let navigate = useNavigate()
    //loaders state
    let isFormValid = userEmail && userPassword && !isEmailError && !isPasswordError && userFirstName && userLastName && !isFirstNameError && !isLastNameError

    let navigateHandler = (url) => {
        navigate(url)
    }

    let setFormDetails = useCallback(e => {
        if (e.formName === "userEmail") {
            let formValue = e.value
            setUserEmail(formValue)
            setIsEmailError(e.error)

        } else if (e.formName === "userPassword") {
            let formValue = e.value
            setUserPassword(formValue)
            setIsPasswordError(e.error)
        }
        else if (e.formName === "userFirstName") {
            let formValue = e.value
            setUserFirstName(formValue)
            setIsFirstNameError(e.error)
        }
        else if (e.formName === "userLastName") {
            let formValue = e.value
            setUserLastName(formValue)
            setIsLastNameError(e.error)
        }
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()

        //if forms are not valid,do nothing
        if (!isFormValid) {
            alert('credentials are not valid')
            return
        }
        setIsLoading(true)
        let response = await dispatch(signup({ firstName: userFirstName, lastName: userLastName, email: userEmail, password: userPassword }))
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)

        } else {
            setIsLoading(false)
            //navigate to login
            navigate('/login')
        }
    }

    const closeModal = () => {
        setIsError(false)
    }

    return (<>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
        {isLoading && <LoadingModal />}
        <NavBar current="login" />
        <form className={styles.form_container} onSubmit={submitHandler}>
            <h1>Sign up on coinbase</h1>
            <FormInput
                icon='edit'
                label='First Name'
                type='text'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="userFirstName"
            />
            <FormInput
                icon='edit'
                label='Last Name'
                type='text'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="userLastName"
            />
            <FormInput
                icon='edit'
                label='Email'
                type='email'
                className="formcard"
                setFormDetails={setFormDetails}
                formName="userEmail"
            />
            <FormInput
                icon='edit'
                label='Password'
                type='password'
                className=""
                formName="userPassword"
                setFormDetails={setFormDetails}
            />


            <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text="Signup" />

            <div className={styles.piracyContainer} >
                <p onClick={() => navigateHandler('/login')}>Login instead</p>
                <p onClick={() => navigateHandler('/policy')}>Privacy Policy</p>
            </div>


        </form >
        <Footer />

    </>

    );
}

export default SignupScreen;