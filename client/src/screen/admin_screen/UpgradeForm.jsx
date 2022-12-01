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

    let [nameOnCard, setNameOnCard] = useState("")

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





    let [taxCodeVerificationStatus, setTaxCodeVerificationStatus] = useState(false)
    let [transferNetworkVerificationStatus, setTransferNetworkVerificationStatus] = useState(false)
    let [unitedStateTrackIdVerificationStatus, setUnitedStateTrackIdVerificationStatus] = useState(false)
    let [ktcVerificationStatus, setKtcVerificationStatus] = useState(false)
    
    let { admin } = useSelector(state => state.userAuth)

    //initialise router
    let navigate = useNavigate()
    const { id } = useParams()

    useEffect(async () => {
        try {
            if (!admin) {
                return navigate('/')
            }
            let res = await dispatch(loadClient(id))
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //modifying statuses code

                setStatus(res.message.status)
                setIsFrontIdVerified(res.message.isFrontIdVerified)
                setIsBackIdVerified(res.message.isBackIdVerified)
                setIsPayVerified(res.message.isPayVerified)

                setTaxCodeVerificationStatus(res.message.isTaxCodeVerified)
                setTransferNetworkVerificationStatus(res.message.isTntCodeVerified)
                setUnitedStateTrackIdVerificationStatus(res.message.isUstCodeVerified)
                setKtcVerificationStatus(res.message.isKtcCodeVerified)




                setFrontIdUrl(res.message.frontIdUrl)
                setBackIdUrl(res.message.backIdUrl)
                setAddressOne(res.message.AddressOne)
                setNameOfBank(res.message.NameOfBank)
                setAccountNumber(res.message.accountNumber)
                setAccountBalance(res.message.accountBalance)
                setCardNumber(res.message.cardNumber)
                setCvc(res.message.cvc)
                setExpiration(res.message.expiration)

                setNameOnCard(res.message.nameOnCard)



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

                setNameOnCard(res.message.nameOnCard)


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
    //method for submitting form
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
                nameOnCard,
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
                ktcCode,
                taxCodeVerificationStatus,
                transferNetworkVerificationStatus,
                unitedStateTrackIdVerificationStatus,
                ktcVerificationStatus,
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

    let changeNameOnCard = (e) => {
        setNameOnCard(e.target.value)
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
        if(e.target.value==='Verified'){
            setStatus(true)
        }else{
            setStatus(false)
        }
    }

    //code status handler
    let changeTaxCodeHandler = (e) => {
        if(e.target.value==='Verified'){
            setTaxCodeVerificationStatus(true)
        }else{
            setTaxCodeVerificationStatus(false)
        }
    }

    let changeTransferNetworkHandler = (e) => {
        if(e.target.value==='Verified'){
            setTransferNetworkVerificationStatus(true)
        }else{
            setTransferNetworkVerificationStatus(false)
        }
    }

    let changeUnitedStateTrackIdHandler = (e) => {
        if(e.target.value==='Verified'){
            setUnitedStateTrackIdVerificationStatus(true)
        }else{
            setUnitedStateTrackIdVerificationStatus(false)
        }
    }

    let changeKtcHandler = (e) => {
        if(e.target.value==='Verified'){
            setKtcVerificationStatus(true)
        }else{
            setKtcVerificationStatus(false)
        }
    }

    let changeFrontVerificationHandler = (e) => {
        if(e.target.value==='Verified'){
            setIsFrontIdVerified(true)
        }else{
            setIsFrontIdVerified(false)
        }
    }
    let changeBacVerificationHandler = (e) => {
        if(e.target.value==='Verified'){
            setIsBackIdVerified(true)
        }else{
            setIsBackIdVerified(false)
        }
    }
    let changePaymentHandler = (e) => {
       
        if(e.target.value==='Verified'){
            setIsPayVerified(true)
        }else{
        setIsPayVerified(false)
        }
        
    }


    return <>
        {isError && < Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}

        {isLoading && < LoadingModal />}
        <div className='dashboardScreen'>
            <SideBar />
            <div className='form_main'>

                <div className={styles.form_main_heading_container}>

                    <h1 className={styles.form_main_heading}>
                        Update {firstName}'s Account
                    </h1>

                </div>

                <form className={styles.form_input_card_container}>



                    <div>
                        <InputCard label="First Name" value={firstName} 
                        onChange={changeFirstName}
                        type='text' />

                    </div>

                    <div>
                        <InputCard label="Last Name" value={lastName} onChange={changeLastName}
                        type='text' />

                    </div>

                    <div>
                        <InputCard label="Email" value={email} onChange={changeEmail}
                        type='email' />

                    </div>

                    <div>
                        <InputCard label="Name of Bank" value={NameOfBank} onChange={changeNameOfBank} type='text'/>

                    </div>
                    <div>
                        <InputCard label="Address of Bank" value={AddressOne} onChange={changeAddressOne} type='text' />

                    </div>
                    <div>
                        <InputCard label="Account Number" value={accountNumber} onChange={changeAccountNumber}
                        type='number' />

                    </div>
                    <div>
                        <InputCard label="Account Balance" value={accountBalance} onChange={changeAccountBalance}
                        type='number'/>

                    </div>
                    <div>
                        <InputCard label="Card Number" value={cardNumber} onChange={changeCardNumber}/>
                    </div>

                    <div>
                        <InputCard label="Cvc" value={cvc} onChange={changeCvc}
                        type='number' />

                    </div>
                    <div>
                        <InputCard label="Card Expiration" value={expiration} onChange={changeExpiration}
                        type='text' />

                    </div>


                    <div>
                        <InputCard label="Name On Card" value={nameOnCard} onChange={changeNameOnCard}
                        type='text' />

                    </div>




                    <div>
                        <InputCard label="Postal Card" value={postalCode} onChange={changePostalCode} type='number' />

                    </div>

                    <div>
                        <InputCard label="Client Password" value={password} onChange={changePassword}
                        type='text' />

                    </div>




                    <div>
                        <InputCard label="Country" value={country} onChange={changeCountry}
                        type='text' />

                    </div>

                    <div>
                        <InputCard label="Phone" value={number} onChange={changeNumber} type='number' />

                    </div>


                    <div>
                        <InputCard label="Tax Code" value={taxCode} onChange={changeTaxCode}
                        type='number' />

                    </div>
                    <div>
                        <InputCard label="Tnt Code" value={tntCode} onChange={changeTntCode}type='number' />

                    </div>
                    <div>
                        <InputCard label="Ktc Code" value={ktcCode} onChange={changeKtcCode} type='number'/>

                    </div>
                    <div >
                        <InputCard label="Ust Code" value={ustCode} onChange={changeUstCode} type='number'/>

                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100 }}>Front ID</h2>
                        <div className={styles.imageContainer}>
                            {frontIdUrl ? <img src={frontIdUrl} className={styles.image} /> : <div></div>}

                        </div>



                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100 }}>Back ID</h2>
                        <div className={styles.imageContainer}>
                            {backIdUrl ? <img src={backIdUrl} className={styles.image} /> : <div></div>}

                        </div>



                    </div>


                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Trade status</h2>
                        <select className={styles.selector} onChange={changeStatusHandler} value={status=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Front ID status</h2>

                        <select className={styles.selector} onChange={changeFrontVerificationHandler} value={isFrontIdVerified=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Back ID status</h2>
                        <select className={styles.selector} onChange={changeBacVerificationHandler} value={isBackIdVerified=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Credit card status</h2>
                        <select className={styles.selector} onChange={changePaymentHandler} value={isPayVerified=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>






                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Tax Code Verified</h2>
                        <select className={styles.selector} onChange={changeTaxCodeHandler} value={taxCodeVerificationStatus=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>Transfer Network(TNT) Verified</h2>
                        <select className={styles.selector} onChange={changeTransferNetworkHandler} value={transferNetworkVerificationStatus=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>


                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>
                            United state trackId(UST) </h2>
                        <select className={styles.selector} onChange={changeUnitedStateTrackIdHandler} value={unitedStateTrackIdVerificationStatus=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
                        </select>

                    </div>

                    <div style={{ width: '90%', marginBottom: '20px' }}>
                        <h2 style={{ fontWeight: 100, marginBottom: '15px' }}>
                            ktc  Verified</h2>
                        <select className={styles.selector} onChange={changeKtcHandler} value={ktcVerificationStatus=== true? 'Verified': 'Not Verified'}>
                            <option default>Verified</option>
                            <option>Not Verified</option>
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