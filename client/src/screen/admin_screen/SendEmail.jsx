import React, { useState,useEffect } from 'react'
import SideBar from "../../component/sidebar"
import InputCard from '../../component/Input'
import styles from "./SendEmail.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import { emailClient } from "../../store/action/userAppStorage";
import { useDispatch,useSelector} from "react-redux";
//importing modals
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/Modal"

let EmailFormScreen = () => {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [text, setText] = useState('type here...')
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const { id } = useParams()
    let { token} = useSelector(state => state.userAuth)

   //security hook
   useEffect(()=>{
    if(!token){
        navigate('/adminlogin')
    }

   },[])
    const changeHandler = (e) => {
        setText(e.target.value)

    }
    const submitHandler = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if(!text || text.length < 8){
            return
        }
        let data = {
            text,
            id
        }

        let response = await dispatch(emailClient(data))
        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)

        } else {
            setIsLoading(false)
            //navigate to login
            navigate('/email')
        }
    }

    const closeModal = () => {
        setIsError(false)
    }


    return <>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
        {isLoading && <LoadingModal />}
        <div className='dashboardScreen'>
            <SideBar />
            <div className='form_main'>
                <div className={styles.form_main_heading_container}>
                    <h1 className={styles.form_main_heading}>
                        Email Client
                    </h1>
                </div>

                <form className={styles.form_input_card_container}>
                    <InputCard label='Enter text' onChange={changeHandler} value={text} />
                    <div className={styles.form_submit_btn_con} >

                        <button className={styles.form_submit_btn} onClick={submitHandler}>
                            <p>Email client</p>
                        </button>

                    </div>

                </form>


            </div>
        </div></>

}

export default EmailFormScreen