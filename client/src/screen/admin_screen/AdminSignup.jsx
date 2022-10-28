import React, { useState, useCallback } from 'react';
import styles from './login.module.css';
//importing modals
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"
//import nav bar
import NavBar from "../../component/AdminNav"
import Footer from "../../component/Footer"
import FormInput from "../../component/input-card/input"
import SubmitBtn from "../../component/Submit";
import { adminsignup } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

function SignupScreen() {
  let [userEmail, setUserEmail] = useState("")
  let [userPassword, setUserPassword] = useState("")
  let [userSecretKey, setUserSecretKey] = useState("")
   let [isSecretKeyError,setIsSecretKeyError] = useState("")
  let [isEmailError, setIsEmailError] = useState("")
  let [isPasswordError, setIsPasswordError] = useState("")
  let [isError,setIsError] = useState(false)
  let [isErrorInfo,setIsErrorInfo] = useState('')
  let [isLoading,setIsLoading] = useState(false)

  //initialising reduzx
  let dispatch = useDispatch()
  
  //initialising router
  let navigate = useNavigate()
  //loaders state

  let setFormDetails = useCallback(e => {
    if (e.formName === "userEmail"){
      let formValue = e.value
      setUserEmail(formValue)
      setIsEmailError(e.error)

    } else if (e.formName === "userPassword") {
      let formValue = e.value
      setUserPassword(formValue)
      setIsPasswordError(e.error)
    }
    else if (e.formName === "userSecretKey") {
        let formValue = e.value
        setUserSecretKey(formValue)
        setIsSecretKeyError(e.error)
      }
  }, [])

  const submitHandler = async(e)=>{
    e.preventDefault()
    
    //if forms are not valid,do nothing
   
    setIsLoading(true)
    let data = {userEmail,userPassword,userSecretKey}
    console.log(data)
    let response = await dispatch( adminsignup({userEmail,userPassword,userSecretKey}))
    
    if(!response.bool){
      setIsLoading(false)
      setIsError(true)
      setIsErrorInfo(response.message)

    }else{
      setIsLoading(false)
       //navigate to login
      navigate('/adminlogin')
    }
  }

  const closeModal = ()=>{
    setIsError(false)
  }

  return (<div >
  {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
  {isLoading && <LoadingModal />}
      <NavBar current="login"/>
      <form className={styles.form_container} onSubmit={submitHandler}>
        <h1>Sign in to Dashboard</h1>
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
          type='text'
          className=""
          formName="userPassword"
          setFormDetails={setFormDetails}
        />
        <FormInput
          icon='edit'
          label='Secret key'
          type='text'
          className=""
          formName="userSecretKey"
          setFormDetails={setFormDetails}
        />

        <SubmitBtn  style={{opacity:1}} text="Signup"/>

      </form >
      <Footer />

   
  </div>
    
  );
}

export default SignupScreen;