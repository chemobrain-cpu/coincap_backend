import React, { useState } from 'react';
import styles from './Send.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import BulletList from "../../component/bulletListItem"
import Footer from "../../component/Footer"
import {useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Send() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>How to send crypto</h1>

                </div>

                <div className={styles.contentSection}>
                    <p>
                        Sending crypto to friends and family, and using crypto to pay for goods and services, is easy once you get the hang of it.

                    </p>
                    <p>
                        Why would you want to send crypto instead of cash? Since crypto is digital, sending crypto can be as easy as sending an email. Crypto also doesn’t have any physical borders the way dollars, pesos, or euros do, so you can send crypto to friends, family, or merchants overseas as easily as sending it to someone sitting next to you. Lastly, you can send crypto without sharing your personal or banking info, making it more secure.
                    </p>
                    <p>
                        To send crypto, you’ll need the recipient’s wallet address. A wallet address is a long string of characters, similar to a bank account number, that identifies where the crypto should go.
                    </p>
                    <p>
                        Since crypto wallet addresses are long, they’re often shown as a QR code that you can scan in your crypto app.
                    </p>
                    <p>
                        Once you have the wallet address, you just need to open your crypto wallet, enter the wallet address, select how much crypto you want to send, and you’re done.
                    </p>
                    <p>
                        There’s usually a small fee to send crypto, called the “gas fee”, but this fee is often much lower than other methods like wire transfers or Western Union.
                    </p>
                    <p>
                        A few things to keep in mind when sending crypto:
                    </p>



                    <BulletList
                        text="Each type of crypto has its own address, so make sure you’re sending Bitcoin to a Bitcoin address, and Ethereum to an Ethereum address."
                    />

                    <BulletList
                        text="Once your transaction is verified and confirmed, the crypto will show up in the recipient’s account. This can take anywhere from a few seconds to a few minutes." />

                    <BulletList
                        text="If you’re a coincap customer, you can also send crypto to any email address in 100+ countries instantly and for free. Just open your coincap app, select the crypto and an amount, enter the recipient’s email address, and hit send." />

                    <BulletList
                        text="Sending crypto is easy and affordable – whether your funds are traveling from across the room or around the world."
                    />


                </div>

            </div>
            <div className={styles.rightContent}>

            </div>

        </div>

        <div className={styles.earnSection}>
            <div className={styles.earnLeft}>
                <h1>
                    Buy Bitcoin in just a few minutes

                </h1>
                <p>
                    Start with as little as $25 and pay with your bank account or debit card.

                </p>
                <button>
                    Get Started

                </button>

            </div>


        </div>


        <Footer />

    </>

    );
}

export default Send;