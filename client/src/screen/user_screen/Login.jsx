import React, { useState, useCallback } from 'react';
import styles from  './login.module.css';
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import FormInput from "../../component/input-card/input"
import SubmitBtn from "../../component/Submit";
import { login } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
//importing modals
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"
//import routers
import { useNavigate } from 'react-router-dom'

//let { admin} = useSelector(state => state.userAuth)
function LoginScreen() {
  let [userEmail, setUserEmail] = useState("")
  let [userPassword, setUserPassword] = useState("")
  let [isEmailError, setIsEmailError] = useState("")
  let [isPasswordError, setIsPasswordError] = useState("")
  let [isError, setIsError] = useState(false)
  let [isErrorInfo, setIsErrorInfo] = useState('')
  let [isLoading, setIsLoading] = useState(false)
  //initialising reduzx
  let dispatch = useDispatch()
  //initialise router
  let navigate = useNavigate()
  //loaders state
  let isFormValid = userEmail && userPassword && !isEmailError && !isPasswordError

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
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!isFormValid) {
      return
    }
    setIsLoading(true)
    //if forms are not valid,do nothing
    if (!isFormValid) {
      return
    }

    let response = await dispatch(login({ email: userEmail, password: userPassword }))
    if (!response.bool) {
      setIsLoading(false)
      setIsError(true)
      setIsErrorInfo(response.message)

    } else {
      setIsLoading(false)
      //navigate to login
      setIsLoading(false)
      setIsError(true)
      setIsErrorInfo("Continue on the mobile app to keep your assets secure")
    }
  }
  const closeModal = () => {
    setIsError(false)
  }



  




  return (<div>
    {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
    {isLoading && <LoadingModal />}

      <NavBar current="Signup" />

      <form className={styles.form_container} onSubmit={submitHandler}>
        <h1>Sign in to coincap</h1>
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
          type='number'
          types="password"
          maxlength={4}
          className="formcard"
          formName="userPassword"
          setFormDetails={setFormDetails}
        />

        <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text='Login' />

        <div className={styles.piracyContainer} >
          <p onClick={() => navigateHandler('/forgetPassword')}>Forget password</p>
          <p onClick={() => navigateHandler('/policy')}>Privacy Policy</p>
        </div>

      </form >

      

    <Footer />
    
    
    </div>

  );
}

export default LoginScreen;