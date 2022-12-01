import React, { useState, useEffect } from 'react'
import SideBar from "../../component/sidebar"
import styles from './Upgrade.module.css'
import { loadClients } from "../../store/action/userAppStorage";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Modal from "../../component/Modal/Modal";
import LoadingModal from "../../component/Modal/LoadingModal"
import User from "../../component/dashboardUser"

let UpgradeScreen = () => {
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(true)
    let [clients, setClients] = useState([])
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()
    let { admin} = useSelector(state => state.userAuth)

    useEffect(async () => {
        try {
            if(!admin){
                return navigate('/')
            }
            let res = await dispatch(loadClients())
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //navigate to login
                setClients(res.message)
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
            let res = await dispatch(loadClients())
            if (!res.bool) {
                setIsLoading(false)
                setIsError(true)
                setIsErrorInfo(res.message)
            } else {
                setIsLoading(false)
                //navigate to login
                setClients(res.message)
            }

        } catch (err) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(err.message)
        }
    }
    const navigateHandler = (id)=>{
        navigate(`/fund/${id}`)
    }

    return <>
        {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}

        {isLoading && <LoadingModal />}
        <div className='dashboardScreen'>
            <SideBar />
            <div className={styles.dashboard_main}>
                <div className={styles.dashboard_main_header}>
                    <h1>Fund Clients Account</h1>
                </div>


                {!isLoading && clients.map(data => <User
                    username={`${data.firstName} ${data.lastName}`}
                    email={data.email}
                    imageUrl={data.photo}
                    navigateHandler = {navigateHandler}
                    key = {data._id}
                    id={data._id}
                />)}


            </div>
           
        </div></>
}

export default UpgradeScreen