import React, { useState, useCallback } from 'react';
import styles from  './login.module.css';
//import nav bar
import NavBar from "../../component/AdminNav"
import Footer from "../../component/Footer"
import FormInput from "../../component/input-card/input"
import SubmitBtn from "../../component/Submit";
import { adminlogin } from "../../store/action/userAppStorage";
import { useDispatch} from "react-redux";
//importing modals
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"
//import routers
import {useNavigate} from 'react-router-dom'

//let { admin} = useSelector(state => state.userAuth)
function LoginScreen() {
  let [userEmail, setUserEmail] = useState("")
  let [userPassword, setUserPassword] = useState("")
  let [isEmailError, setIsEmailError] = useState("")
  let [isPasswordError, setIsPasswordError] = useState("")
  let [isError,setIsError] = useState(false)
  let [isErrorInfo,setIsErrorInfo] = useState('')
  let [isLoading,setIsLoading] = useState(false)
  //initialising reduzx
  let dispatch = useDispatch()
  //initialise router
  let navigate = useNavigate()
  //loaders state
  let isFormValid = userEmail && userPassword &&  !isEmailError && !isPasswordError


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
  }, [])

  const submitHandler = async(e)=>{
    e.preventDefault()
    
   
    setIsLoading(true)
    //if forms are not valid,do nothing
    let data = {
      userEmail,userPassword
    }
    console.log(data)

    let response = await dispatch(adminlogin({userEmail,userPassword}))

    if(!response.bool){
      setIsLoading(false)
      setIsError(true)
      setIsErrorInfo(response.message)

    }else{
      setIsLoading(false)
       //navigate to login
      navigate('/upgrade')
    }
  }
  const closeModal = ()=>{
    setIsError(false)
  }


  

  return (<>
  {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
  {isLoading && <LoadingModal/>}

      <NavBar current="Signup"/>
      
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

        <SubmitBtn  text='Login'/>

        


      </form >
      <Footer />

   </>
    
  );
}

export default LoginScreen;
