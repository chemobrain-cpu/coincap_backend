import React, { useState } from 'react';
import styles from './Ethereum.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import { useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Stablecoin() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is a stablecoin?</h1>


                </div>

                <img src={"../../Learn_Illustration_What_is_a_Stablecoin.png"} />

                <div className={styles.definitionSection}>
                    <h1>Definition</h1>
                    <p>
                        A stablecoin is a digital currency that is pegged to a “stable” reserve asset like the U.S. dollar or gold. Stablecoins are designed to reduce volatility relative to unpegged cryptocurrencies like Bitcoin.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        Stablecoins bridge the worlds of cryptocurrency and everyday fiat currency because their prices are pegged to a reserve asset like the U.S. dollar or gold. This dramatically reduces volatility compared to something like Bitcoin and results in a form of digital money that is better suited to everything from day-to-day commerce to making transfers between exchanges.
                    </p>

                    <p>
                        The combination of traditional-asset stability with digital-asset flexibility has proven to be a wildly popular idea. Billions of dollars in value have flowed into stablecoins like USD Coin (USDC) as they’ve become some of the most popular ways to store and trade value in the crypto ecosystem.
                    </p>

                </div>



                <BulletList
                    text="You can check the latest prices on coincap's Ethereum asset page."
                />

                <div className={styles.headingSection}>
                    <h1>Why are stablecoins important?</h1>


                </div>

                <div className={styles.contentSection}>


                    <p>
                        The USDC stablecoin, for example, is backed by dollar-denominated assets of at least equal fair value to the USDC in circulation in segregated accounts with US regulated financial institutions. Such accounts are attested to (i.e. verified publicly) by an independent accounting firm.
                    </p>
                    <p>
                        Like many other stablecoins, USDC currently operates on the Ethereum blockchain. Stablecoins are free from the volatility of non-pegged cryptocurrencies, while inheriting some of their most powerful properties:
                    </p>

                </div>

                <BulletList
                    text="Stablecoins are open, global, and accessible to anyone on the internet, 24/7"
                />
                <BulletList
                    text="They’re fast, cheap and secure to transmit"
                />
                <BulletList
                    text="They’re digitally native to the Internet and programmable"
                />

                <div className={styles.headingSection}>
                    <h1>What can you do with stablecoins?</h1>


                </div>

                <BulletList
                    text="Minimize volatility. The value of cryptocurrencies like Bitcoin and Ether fluctuates a lot — sometimes by the minute. An asset that’s pegged to a more stable currency can give buyers and sellers certainty that the value of their tokens won’t rise or crash unpredictably in the near future. "
                />
                <BulletList
                    text="Trade or save assets. You don’t need a bank account to hold stablecoins, and they’re easy to transfer. Stablecoins’ value can be sent easily around the globe, including to places where the U.S. dollar may be hard to obtain or where the local currency is unstable."
                />
                <BulletList
                    text="Earn interest There are easy ways to earn interest (typically higher than what a bank would offer) on a stablecoin investment."
                />
                <BulletList
                    text="Transfer money cheaply. People have sent as much as a million dollars worth of USDC with transfer fees of less than a dollar."
                />
                <BulletList
                    text="Send internationally. Fast processing and low transaction fees make stablecoins like USDC a good choice for sending money anywhere in the world."
                />















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
                <button onClick={()=>{handleNavigate('/signup')}}>
                    Get Started

                </button>

            </div>


        </div>


        <Footer />

    </>

    );
}

export default Stablecoin;