import React from 'react';
import styles from './Support.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"


//let { admin} = useSelector(state => state.userAuth)
function SupportScreen() {
    
    return (<>

        <div className='login_screen'>
            <NavBar />
            <div className={styles.contentContainer}>
                <div className={styles.imageOuterContainer}>
                    <h1 className={styles.greetings}>Contact our support</h1>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageCon}>
                    <p className={styles.image}>Pls click on the chat icon below to get in touch with our administrator,who can resolve any difficulty you might be having on the platform. we're available 24/7 to listen to any complaint that might arise</p>

                    </div>


                </div>


            </div>
            <Footer />

        </div></>

    );
}

export default SupportScreen;