import React, { useEffect, useState } from 'react'
import SideBar from "../../component/sidebar"
import styles from "./UpgradeForm.module.css"
import InputCard from '../../component/Input'
import Modal from "../../component/Modal/Modal";
import LoadingModal from "../../component/Modal/LoadingModal"
import { upgradeClient, loadClient } from "../../store/action/userAppStorage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

let UpgradeFormScreen = () => {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let dispatch = useDispatch()
    let [accountBalance, setAccountBalance] = useState("")
     let [fundBalance, setFundBalance] = useState(0)
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
  
    
    let { admin } = useSelector(state => state.userAuth)

    //initialise router
    let navigate = useNavigate()
    const { id } = useParams()

    useEffect(async () => {
        try {
            if (!admin) {
                return navigate('/adminlogin')
            }
            let res = await dispatch(loadClient(id))
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                setAccountBalance(res.message.accountBalance)
                setFirstName(res.message.firstName)
                setLastName(res.message.lastName)
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
            let res = await dispatch(loadClient(id))
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //navigate to login
                
                setAccountBalance(res.message.accountBalance)
                setFirstName(res.message.firstName)
                setLastName(res.message.lastName)
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
                accountBalance,
                fundBalance,
                firstName,
                lastName,
                email,
            }

            let res = await dispatch(upgradeClient(obj))

            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //navigate to login
                navigate('/upgrade')
            }

        } catch (err) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(err.message)
        }

    }

   
    let changeAccountBalance = (e) => {
        setAccountBalance(e.target.value)
    }

    let changeFundBalance = (e) => {
        setFundBalance(e.target.value)
    }
   
   

    let changeFirstName = (e) => {
        setFirstName(e.target.value)
            (e.target.value)

    }

    let changeLastName = (e) => {
        setLastName(e.target.value)
            (e.target.value)

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
                    Fund {firstName}'s Account
                    </h1>

                </div>

                <form className={styles.form_input_card_container}>



                    <div>
                        <InputCard label="First Name" value={firstName} onChange={changeFirstName} />

                    </div>

                    <div>
                        <InputCard label="Last Name" value={lastName} onChange={changeLastName} />

                    </div>

                    <div>
                        <InputCard label="Email" value={email} onChange={changeEmail} />

                    </div>

                    
                    <div>
                        <InputCard label="Account Balance" value={accountBalance} onChange={changeAccountBalance} />

                    </div>

                    <div>
                        <InputCard label="Enter amount to fund" value={fundBalance} onChange={changeFundBalance} />

                    </div>

                    <div>
                        <div className={styles.form_submit_btn_con}>
                            <button className={styles.form_submit_btn} onClick={submitHandler}>
                                <p>Fund</p>
                            </button>

                        </div>
                    </div>



                </form>









            </div>

        </div>
    </>

}

export default UpgradeFormScreen