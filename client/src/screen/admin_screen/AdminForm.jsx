import React, { useEffect, useState } from 'react';
import SideBar from "../../component/sidebar";
import styles from "./UpgradeForm.module.css";
import InputCard from '../../component/Input';
import Modal from "../../component/Modal/Modal";
import LoadingModal from "../../component/Modal/LoadingModal";
import { updateAdmin, loadAdmin } from "../../store/action/userAppStorage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

let AdminFormScreen = () => {
    let dispatch = useDispatch()
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
     let [password, setPassword] = useState('')
    let [email, setEmail] = useState("")

    
    let { admin } = useSelector(state => state.userAuth)

    //initialise router
    let navigate = useNavigate()
    const { id } = useParams()

    useEffect(async () => {
        try {
            if (!admin) {
                return navigate('/')
            }
            let res = await dispatch(loadAdmin(id))
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                setPassword(res.message.password)
                setEmail(res.message.email)
            }
        } catch (err) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(err.message)
        }
    }, [])

    const closeModal = async () => {
        setIsLoading(true)
        setIsError(false)
        try {
            let res = await dispatch(loadAdmin(id))
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //navigate to login
                setPassword(res.message.password)
                setEmail(res.message.email)
                
            }

        } catch (err) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(err.message)
        }
    }
    //method for submitting form
    let submitHandler = async (e) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            const obj = {
                password,
                email
            }

            let res = await dispatch(updateAdmin(obj))

            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //navigate to login
                navigate('/admin')
            }

        } catch (err) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(err.message)
        }

    }

  
    let changePassword = (e) => {
        setPassword(e.target.value)
    }
   

    let changeEmail = (e) => {
        setEmail(e.target.value)

    }
   
   
    return <>
        {isError && < Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}

        {isLoading && < LoadingModal />}
        <div className='dashboardScreen'>
            <SideBar />
            <div className='form_main'>

                <div className={styles.form_main_heading_container}>

                    <h1 className={styles.form_main_heading}>
                    Change Info
                    </h1>

                </div>

                <form className={styles.form_input_card_container}>

                    <div>
                        <InputCard label="Email" value={email} onChange={changeEmail} />

                    </div>

                    
                    

                    <div>
                        <InputCard label="Password" value={password} onChange={changePassword}
                        type="text" />

                    </div>

                    <div>
                        <div className={styles.form_submit_btn_con}>
                            <button className={styles.form_submit_btn} onClick={submitHandler}>
                                <p>Update</p>
                            </button>

                        </div>
                    </div>
                    



                </form>
                









            </div>

        </div>
    </>

}

export default AdminFormScreen