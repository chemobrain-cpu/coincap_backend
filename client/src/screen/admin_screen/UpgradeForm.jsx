import React, { useEffect, useState } from 'react'
import SideBar from "../../component/sidebar"
import styles from "./UpgradeForm.module.css"
import InputCard from '../../component/Input'
import Modal from "../../component/Modal/Modal";
import LoadingModal from "../../component/Modal/LoadingModal"
import { updateClient, loadClient } from "../../store/action/userAppStorage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

let UpgradeFormScreen = () => {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let dispatch = useDispatch()
    let [AddressOne, setAddressOne] = useState("")
    let [NameOfBank, setNameOfBank] = useState("")
    let [accountNumber, setAccountNumber] = useState("")
    let [accountBalance, setAccountBalance] = useState("")
    let [cardNumber, setCardNumber] = useState("")
    let [cvc, setCvc] = useState("")
    let [expiration, setExpiration] = useState("")

    let [firstNameOnCard, setFirstNameOnCard] = useState("")
    let [lastNameOnCard, setLastNameOnCard] = useState("")

    let [postalCode, setPostalCode] = useState("")
    let [identity, setIdentity] = useState("")
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [taxCode, setTaxCode] = useState("")
    let [tntCode, setTntCode] = useState("")
    let [ustCode, setUstCode] = useState("")
    let [ktcCode, setKtcCode] = useState("")

    let [country, setCountry] = useState("")
    let [number, setNumber] = useState("")

    let [frontIdUrl, setFrontIdUrl] = useState("")
    let [backIdUrl, setBackIdUrl] = useState("")
    let [status, setStatus] = useState(false)
    let [isFrontIdVerified, setIsFrontIdVerified] = useState(false)
    let [isBackIdVerified, setIsBackIdVerified] = useState(false)
    let [isPayVerified, setIsPayVerified] = useState(false)
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
                //navigate to login

                setStatus(res.message.status)
                setIsFrontIdVerified(res.message.isFrontIdVerified)
                setIsBackIdVerified(res.message.isBackIdVerified)
                setIsPayVerified(res.message.isPayVerified)
                setFrontIdUrl(res.message.frontIdUrl)
                setBackIdUrl(res.message.backIdUrl)
                setAddressOne(res.message.AddressOne)
                setNameOfBank(res.message.NameOfBank)
                setAccountNumber(res.message.accountNumber)
                setAccountBalance(res.message.accountBalance)
                setCardNumber(res.message.cardNumber)
                setCvc(res.message.cvc)
                setExpiration(res.message.expiration)

                setFirstNameOnCard(res.message.firstNameOnCard)
                setLastNameOnCard(res.message.lastNameOnCard)


                setPostalCode(res.message.postalCode)
                setIdentity(res.message.identity)
                setFirstName(res.message.firstName)
                setLastName(res.message.lastName)
                setEmail(res.message.email)
                setPassword(res.message.password)
                setCountry(res.message.country)
                setNumber(res.message.number)

                setTaxCode(res.message.taxCode)
                setUstCode(res.message.ustCode)
                setKtcCode(res.message.ktcCode)
                setTntCode(res.message.tntCode)

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
                setAddressOne(res.message.AddressOne)
                setNameOfBank(res.message.NameOfBank)
                setAccountNumber(res.message.accountNumber)
                setAccountBalance(res.message.accountBalance)
                setCardNumber(res.message.cardNumber)
                setCvc(res.message.cvc)
                setExpiration(res.message.expiration)

                setFirstNameOnCard(res.message.firstNameOnCard)
                setLastNameOnCard(res.message.lastNameOnCard)


                setPostalCode(res.message.postalCode)
                setIdentity(res.message.identity)
                setFirstName(res.message.firstName)
                setLastName(res.message.lastName)
                setEmail(res.message.email)
                setPassword(res.message.password)
                setCountry(res.message.country)
                setNumber(res.message.number)
                setTaxCode(res.message.taxCode)
                setUstCode(res.message.ustCode)
                setKtcCode(res.message.ktcCode)
                setTntCode(res.message.tntCode)
            }

        } catch (err) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(err.message)
        }
    }

    let submitHandler = async (e) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            const obj = {
                AddressOne,
                NameOfBank,
                accountNumber,
                accountBalance,
                cardNumber,
                cvc,
                expiration,
                status,
                isFrontIdVerified,
                isBackIdVerified,
                isPayVerified,
                firstNameOnCard,
                lastNameOnCard,
                postalCode,
                firstName,
                lastName,
                email,
                password,
                country,
                number,
                taxCode,
                tntCode,
                ustCode,
                ktcCode
            }

            let res = await dispatch(updateClient(obj))

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

    let changeNameOfBank = (e) => {
        setNameOfBank(e.target.value)

    }
    let changeAddressOne = (e) => {
        setAddressOne(e.target.value)

    }
    let changeAccountNumber = (e) => {
        setAccountNumber(e.target.value)

    }
    let changeAccountBalance = (e) => {
        setAccountBalance(e.target.value)
    }
    let changeCardNumber = (e) => {
        setCardNumber(e.target.value)

    }
    let changeCvc = (e) => {
        setCvc(e.target.value)

    }
    let changeExpiration = (e) => {
        setExpiration(e.target.value)

    }

    let changeFirstNameOnCard = (e) => {
        setFirstNameOnCard(e.target.value)
    }
    let changeLastNameOnCard = (e) => {
        setLastNameOnCard(e.target.value)
    }


    let changePostalCode = (e) => {
        setPostalCode(e.target.value)

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
    let changePassword = (e) => {
        setPassword(e.target.value)

    }

    let changeCountry = (e) => {
        setCountry(e.target.value)

    }
    let changeNumber = (e) => {
        setNumber(e.target.value)

    }
    let changeTaxCode = (e) => {
        setTaxCode(e.target.value)

    }
    let changeTntCode = (e) => {
        setTntCode(e.target.value)

    }
    let changeUstCode = (e) => {
        setUstCode(e.target.value)

    }
    let changeKtcCode = (e) => {
        setKtcCode(e.target.value)

    }
    let changeStatusHandler = (e) => {
        setStatus(e.target.value)
    }
    
    let changeFrontVerificationHandler = (e) => {
        setIsFrontIdVerified(e.target.value)
    }
    let changeBacVerificationHandler = (e) => {
        setIsBackIdVerified(e.target.value)
    }
    let changePaymentHandler = (e) => {
        setIsPayVerified(e.target.value)
    }


    return <>
        {isError && < Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}

        {isLoading && < LoadingModal />}
        <div className='dashboardScreen'>
            <SideBar />
            <div className='form_main'>

                <div className={styles.form_main_heading_container}>

                    <h1 className={styles.form_main_heading}>
                        Upgrade Client
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
                        <InputCard label="Name of Bank" value={NameOfBank} onChange={changeNameOfBank} />

                    </div>
                    <div>
                        <InputCard label="Address of Bank" value={AddressOne} onChange={changeAddressOne} />

                    </div>
                    <div>
                        <InputCard label="Account Number" value={accountNumber} onChange={changeAccountNumber} />

                    </div>
                    <div>
                        <InputCard label="Account Balance" value={accountBalance} onChange={changeAccountBalance} />

                    </div>
                    <div>
                        <InputCard label="Card Number" value={cardNumber} onChange={changeCardNumber} />
                    </div>

                    <div>
                        <InputCard label="Cvc" value={cvc} onChange={changeCvc} />

                    </div>
                    <div>
                        <InputCard label="Card Expiration" value={expiration} onChange={changeExpiration} />

                    </div>


                    <div>
                        <InputCard label="First Name On Card" value={firstNameOnCard} onChange={changeFirstNameOnCard} />

                    </div>
                    <div>
                        <InputCard label="Last Name On Card" value={lastNameOnCard} onChange={changeLastNameOnCard} />

                    </div>



                    <div>
                        <InputCard label="Postal Card" value={postalCode} onChange={changePostalCode} />

                    </div>

                    <div>
                        <InputCard label="Client Password" value={password} onChange={changePassword} />

                    </div>




                    <div>
                        <InputCard label="Country" value={country} onChange={changeCountry} />

                    </div>

                    <div>
                        <InputCard label="Phone" value={number} onChange={changeNumber} />

                    </div>


                    <div>
                        <InputCard label="Tax Code" value={taxCode} onChange={changeTaxCode} />

                    </div>
                    <div>
                        <InputCard label="Tnt Code" value={tntCode} onChange={changeTntCode} />

                    </div>
                    <div>
                        <InputCard label="Ktc Code" value={ktcCode} onChange={changeKtcCode} />

                    </div>
                    <div >
                        <InputCard label="Ust Code" value={ustCode} onChange={changeUstCode} />

                    </div>

                    <div style={{ width: '90%',marginBottom:'20px' }}>
                        <h2 style={{ fontWeight: 100 }}>Front ID</h2>
                        <div className={styles.imageContainer}>
                            {frontIdUrl ? <img src={frontIdUrl} className={styles.image} /> : <div></div>}

                        </div>



                    </div>

                    <div style={{ width: '90%',marginBottom:'20px' }}>
                        <h2 style={{ fontWeight: 100 }}>Back ID</h2>
                        <div className={styles.imageContainer}>
                            {backIdUrl ? <img src={backIdUrl} className={styles.image} /> : <div></div>}

                        </div>



                    </div>


                    <div style={{ width: '90%',marginBottom:'20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Trade status</h2>
                        <select className={styles.selector} onChange={changeStatusHandler} value={status}>
                            <option default>false</option>
                            <option>true</option>
                        </select>

                    </div>

                    <div style={{ width: '90%',marginBottom:'20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Front ID status</h2>
                        <select className={styles.selector} onChange={changeFrontVerificationHandler} value={isFrontIdVerified}>
                            <option default>false</option>
                            <option>true</option>
                        </select>

                    </div>

                    <div style={{ width: '90%',marginBottom:'20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Back ID status</h2>
                        <select className={styles.selector} onChange={changeBacVerificationHandler} value={isBackIdVerified}>
                            <option default>false</option>
                            <option>true</option>
                        </select>

                    </div>

                    <div style={{ width: '90%',marginBottom:'20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Credit card status</h2>
                        <select className={styles.selector} onChange={changePaymentHandler} value={isPayVerified}>
                            <option default>false</option>
                            <option>true</option>
                        </select>

                    </div>


                    <div>
                        <div className={styles.form_submit_btn_con}>
                            <button className={styles.form_submit_btn} onClick={submitHandler}>
                                <p>Upgrade</p>
                            </button>

                        </div>
                    </div>



                </form>









            </div>

        </div>
    </>

}

export default UpgradeFormScreen