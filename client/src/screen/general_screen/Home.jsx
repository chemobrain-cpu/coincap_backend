import React, { useState} from 'react';

import styles from './Home.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import GetStarted from "../../component/getStarted"
import CoinSection from "../../component/coinSection"
import EarnSection from "../../component/earnSection"
import EarningSection from "../../component/earningSection"
import PortfolioSection from "../../component/portfolio"
import SecuritySection from "../../component/Security"
import InfoSection from "../../component/Info"
import Action from "../../component/action"
import Footer from "../../component/Footer"
import Modal from "../../component/Modal/DownloadModal"
//import routers

//let { admin} = useSelector(state => state.userAuth)
function Home() {
  
    let [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(false)
    }

    const navigateToApp = ()=>{
        setShowModal(true)

    }




    return (<>
        {showModal && <Modal showModal={showModal} closeModal={closeModal} content={"continue on the mobile app"} />}
        <NavBar navigateToApp ={navigateToApp}/>
        <GetStarted navigateToApp ={navigateToApp}/>

        <CoinSection navigateToApp ={navigateToApp}/>
        <EarnSection navigateToApp ={navigateToApp}/>
        <PortfolioSection navigateToApp ={navigateToApp}/>
        <SecuritySection navigateToApp ={navigateToApp}/>
        <InfoSection navigateToApp ={navigateToApp}/>
        <Action navigateToApp ={navigateToApp}/>
        <EarningSection navigateToApp ={navigateToApp}/>
        <Footer/>
        
        
        
    </>

    );
}

export default Home;